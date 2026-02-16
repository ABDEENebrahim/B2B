import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePaymentIntentDto } from './dto/create-payment-intent.dto';
import { PaymentsService } from './payments.service';
import { RefundPaymentDto } from './dto/refund-payment.dto';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('intent')
  createIntent(@Body() dto: CreatePaymentIntentDto) {
    return this.paymentsService.createIntent(dto);
  }

  @Post('confirm/:id')
  confirm(@Param('id') id: string) {
    return this.paymentsService.confirmPayment(id);
  }

  @Post(':id/refund')
  refund(@Param('id') id: string, @Body() dto: RefundPaymentDto) {
    return this.paymentsService.refund(id, dto);
  }

  @Get('transactions')
  listTransactions() {
    return this.paymentsService.listTransactions();
  }
}
