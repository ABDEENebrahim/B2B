import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { AuthUser } from '../common/types/auth-user.type';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  private readonly refreshTokens = new Map<string, string>();

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    if (this.usersService.findByEmail(dto.email)) {
      throw new BadRequestException('Email already exists');
    }

    const passwordHash = await hash(dto.password, 12);
    const now = new Date();
    const user: AuthUser = {
      id: uuid(),
      email: dto.email,
      passwordHash,
      role: dto.role,
      status: 'ACTIVE',
      verificationStatus: 'UNVERIFIED',
      failedLoginAttempts: 0,
      createdAt: now,
      updatedAt: now,
    };
    this.usersService.seed(user);

    return this.issueTokens(user);
  }

  async validateUser(email: string, password: string): Promise<AuthUser> {
    const user = this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    if (user.lockoutUntil && user.lockoutUntil > new Date()) {
      throw new UnauthorizedException('Account temporarily locked');
    }

    const isValid = await compare(password, user.passwordHash);
    if (!isValid) {
      user.failedLoginAttempts += 1;
      if (user.failedLoginAttempts >= 5) {
        user.lockoutUntil = new Date(Date.now() + 15 * 60_000);
        user.failedLoginAttempts = 0;
      }
      this.usersService.seed(user);
      throw new UnauthorizedException('Invalid credentials');
    }

    user.failedLoginAttempts = 0;
    user.lockoutUntil = undefined;
    this.usersService.seed(user);

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    return this.issueTokens(user);
  }

  async refresh(refreshToken: string) {
    const payload = await this.jwtService.verifyAsync<{ sub: string; tokenId: string }>(
      refreshToken,
      { secret: process.env.JWT_REFRESH_SECRET ?? 'refresh-secret' },
    );

    const stored = this.refreshTokens.get(payload.sub);
    if (stored !== refreshToken) {
      throw new UnauthorizedException('Refresh token revoked');
    }

    const user = this.usersService.findById(payload.sub);
    return this.issueTokens(user);
  }

  logout(userId: string) {
    this.refreshTokens.delete(userId);
    return { success: true };
  }

  logoutAll(userId: string) {
    this.refreshTokens.delete(userId);
    return { success: true };
  }

  me(user: AuthUser) {
    return this.usersService.findById(user.id);
  }

  private async issueTokens(user: AuthUser) {
    const accessToken = await this.jwtService.signAsync(
      { sub: user.id, email: user.email, role: user.role },
      {
        secret: process.env.JWT_ACCESS_SECRET ?? 'access-secret',
        expiresIn: '15m',
      },
    );

    const refreshToken = await this.jwtService.signAsync(
      { sub: user.id, tokenId: uuid() },
      {
        secret: process.env.JWT_REFRESH_SECRET ?? 'refresh-secret',
        expiresIn: '7d',
      },
    );

    this.refreshTokens.set(user.id, refreshToken);

    return {
      user: { id: user.id, email: user.email, role: user.role },
      accessToken,
      refreshToken,
      expiresIn: 900,
    };
  }
}
