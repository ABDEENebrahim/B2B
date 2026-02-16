import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthUser } from '../common/types/auth-user.type';
import { AdminUpdateUserDto } from './dto/admin-update-user.dto';

@Injectable()
export class UsersService {
  private users = new Map<string, AuthUser>();

  seed(user: AuthUser): void {
    this.users.set(user.id, user);
  }

  findById(id: string): AuthUser {
    const user = this.users.get(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  findByEmail(email: string): AuthUser | undefined {
    return [...this.users.values()].find((user) => user.email === email);
  }

  list(): AuthUser[] {
    return [...this.users.values()];
  }

  updateByAdmin(id: string, dto: AdminUpdateUserDto): AuthUser {
    const user = this.findById(id);
    const updated = { ...user, ...dto, updatedAt: new Date() };
    this.users.set(id, updated);
    return updated;
  }



  updateProfile(id: string, dto: { firstName?: string; lastName?: string }): AuthUser {
    const user = this.findById(id);
    const updated = { ...user, ...dto, updatedAt: new Date() };
    this.users.set(id, updated);
    return updated;
  }

  remove(id: string): void {
    this.findById(id);
    this.users.delete(id);
  }
}
