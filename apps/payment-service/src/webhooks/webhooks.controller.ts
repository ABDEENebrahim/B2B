import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentsService } from '../payments/payments.service';

@ApiTags('webhooks')
@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('stripe')
  stripeWebhook(
    @Body('paymentIntentId') paymentIntentId: string,
    @Body('status') status: 'CONFIRMED' | 'FAILED' | 'REFUNDED' | 'HELD',
  ) {
    return this.paymentsService.webhookUpdate(paymentIntentId, status);
  }
}
