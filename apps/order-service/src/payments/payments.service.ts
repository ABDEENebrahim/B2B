import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PaymentTransaction } from '../common/types/domain.types';
import { OrdersService } from '../orders/orders.service';
import { CreatePaymentIntentDto } from './dto/create-payment-intent.dto';
import { RefundPaymentDto } from './dto/refund-payment.dto';

@Injectable()
export class PaymentsService {
  private transactions = new Map<string, PaymentTransaction>();

  constructor(private readonly ordersService: OrdersService) {}

  createIntent(dto: CreatePaymentIntentDto) {
    const order = this.ordersService.findOne(dto.orderId);
    if (dto.amount > order.totalAmount) {
      throw new BadRequestException('Payment amount exceeds order total');
    }

    const tx: PaymentTransaction = {
      id: randomUUID(),
      orderId: dto.orderId,
      amount: dto.amount,
      currency: dto.currency,
      method: dto.method,
      status: 'HELD',
      createdAt: new Date().toISOString(),
    };
    this.transactions.set(tx.id, tx);
    return tx;
  }

  confirmPayment(id: string) {
    const tx = this.findOne(id);
    tx.status = 'HELD';
    this.transactions.set(id, tx);
    return tx;
  }

  refund(id: string, dto: RefundPaymentDto) {
    const tx = this.findOne(id);
    if (dto.amount > tx.amount) throw new BadRequestException('Refund exceeds original payment');
    tx.status = 'REFUNDED';
    this.transactions.set(id, tx);
    return tx;
  }

  listTransactions() {
    return [...this.transactions.values()];
  }

  findOne(id: string) {
    const tx = this.transactions.get(id);
    if (!tx) throw new NotFoundException('Transaction not found');
    return tx;
  }
}
