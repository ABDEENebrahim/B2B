import { IsDateString, IsNumber, IsString, Min } from 'class-validator';

export class CreateQuoteDto {
  @IsString()
  rfqId!: string;

  @IsString()
  supplierId!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsNumber()
  @Min(1)
  quantity!: number;

  @IsNumber()
  @Min(1)
  deliveryTimeDays!: number;

  @IsDateString()
  validUntil!: string;
}
