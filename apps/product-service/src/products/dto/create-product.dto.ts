import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { ProductStatus } from '../../common/types/domain.types';

export class CreateProductDto {
  @IsString()
  supplierId!: string;

  @IsString()
  categoryId!: string;

  @IsString()
  @MaxLength(200)
  title!: string;

  @IsString()
  @MaxLength(220)
  slug!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @Min(0)
  basePrice!: number;

  @IsString()
  currency!: string;

  @IsNumber()
  @Min(1)
  minOrderQty!: number;

  @IsOptional()
  @IsString()
  originCountry?: string;

  @IsOptional()
  @IsEnum(['DRAFT', 'PENDING', 'ACTIVE', 'REJECTED'])
  status?: ProductStatus;

  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;
}
