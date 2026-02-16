import { Injectable } from '@nestjs/common';
import { PaymentsService } from '../payments/payments.service';

@Injectable()
export class EscrowService {
  constructor(private readonly paymentsService: PaymentsService) {}

  release(transactionId: string) {
    const tx = this.paymentsService.findOne(transactionId);
    tx.status = 'RELEASED';
    return tx;
  }

  status(orderId: string) {
    const txs = this.paymentsService
      .listTransactions()
      .filter((tx) => tx.orderId === orderId)
      .map((tx) => tx.status);

    return { orderId, statuses: txs };
  }
}
