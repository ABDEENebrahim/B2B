import { IsNumber, IsString, Min } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  quoteId!: string;

  @IsString()
  buyerId!: string;

  @IsString()
  supplierId!: string;

  @IsNumber()
  @Min(0)
  totalAmount!: number;

  @IsString()
  currency!: string;
}
