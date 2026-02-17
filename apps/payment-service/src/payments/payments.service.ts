import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PaymentIntent } from '../common/types/payment.types';
import { CreatePaymentIntentDto } from './dto/create-payment-intent.dto';
import { RefundPaymentDto } from './dto/refund-payment.dto';

@Injectable()
export class PaymentsService {
  private intents = new Map<string, PaymentIntent>();

  createIntent(dto: CreatePaymentIntentDto) {
    const existing = [...this.intents.values()].find(
      (intent) => intent.idempotencyKey === dto.idempotencyKey,
    );
    if (existing) return existing;

    const intent: PaymentIntent = {
      id: randomUUID(),
      orderId: dto.orderId,
      amount: dto.amount,
      currency: dto.currency,
      method: dto.method,
      status: 'PENDING',
      idempotencyKey: dto.idempotencyKey,
      createdAt: new Date().toISOString(),
    };

    this.intents.set(intent.id, intent);
    return intent;
  }

  confirm(id: string) {
    const intent = this.findOne(id);
    intent.status = 'HELD';
    this.intents.set(id, intent);
    return intent;
  }

  refund(id: string, dto: RefundPaymentDto) {
    const intent = this.findOne(id);
    if (dto.amount > intent.amount) {
      throw new BadRequestException('Refund amount exceeds original payment');
    }
    intent.status = 'REFUNDED';
    this.intents.set(id, intent);
    return intent;
  }

  webhookUpdate(id: string, status: PaymentIntent['status']) {
    const intent = this.findOne(id);
    intent.status = status;
    this.intents.set(id, intent);
    return intent;
  }

  listTransactions() {
    return [...this.intents.values()];
  }

  findOne(id: string) {
    const intent = this.intents.get(id);
    if (!intent) throw new NotFoundException('Payment intent not found');
    return intent;
  }
}
