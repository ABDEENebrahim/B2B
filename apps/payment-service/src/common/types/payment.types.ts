export type PaymentMethod = 'CARD' | 'BANK_TRANSFER';
export type PaymentStatus = 'PENDING' | 'HELD' | 'CONFIRMED' | 'REFUNDED' | 'FAILED';

export interface PaymentIntent {
  id: string;
  orderId: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  status: PaymentStatus;
  idempotencyKey: string;
  createdAt: string;
}
