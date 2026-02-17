import { IsNumber, Min } from 'class-validator';

export class RefundPaymentDto {
  @IsNumber()
  @Min(0.01)
  amount!: number;
}
