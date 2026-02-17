import { IsEnum, IsNumber, IsString, Min } from 'class-validator';

export class CreatePaymentIntentDto {
  @IsString()
  orderId!: string;

  @IsNumber()
  @Min(0.01)
  amount!: number;

  @IsString()
  currency!: string;

  @IsEnum(['CARD', 'BANK_TRANSFER'])
  method!: 'CARD' | 'BANK_TRANSFER';

  @IsString()
  idempotencyKey!: string;
}
