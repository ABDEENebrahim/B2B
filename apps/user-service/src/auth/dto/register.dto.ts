import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  password!: string;

  @IsEnum(['BUYER', 'SUPPLIER'])
  role!: 'BUYER' | 'SUPPLIER';
}
