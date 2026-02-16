import { IsEmail, IsOptional, IsString } from 'class-validator';

export class EmailTokenDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  token?: string;
}
