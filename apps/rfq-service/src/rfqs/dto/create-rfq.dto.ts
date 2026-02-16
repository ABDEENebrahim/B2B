import { IsDateString, IsEnum, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateRfqDto {
  @IsString()
  buyerId!: string;

  @IsString()
  @MaxLength(200)
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  categoryId!: string;

  @IsNumber()
  @Min(1)
  quantity!: number;

  @IsString()
  unit!: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  targetPrice?: number;

  @IsDateString()
  deadline!: string;

  @IsOptional()
  @IsEnum(['PUBLIC', 'PRIVATE', 'INVITE_ONLY'])
  visibility?: 'PUBLIC' | 'PRIVATE' | 'INVITE_ONLY';
}
