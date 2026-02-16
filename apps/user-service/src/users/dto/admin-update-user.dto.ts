import { IsEnum, IsOptional } from 'class-validator';

export class AdminUpdateUserDto {
  @IsOptional()
  @IsEnum(['ACTIVE', 'SUSPENDED'])
  status?: 'ACTIVE' | 'SUSPENDED';

  @IsOptional()
  @IsEnum(['BUYER', 'SUPPLIER', 'ADMIN'])
  role?: 'BUYER' | 'SUPPLIER' | 'ADMIN';
}
