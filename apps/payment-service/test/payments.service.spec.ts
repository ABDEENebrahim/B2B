import { PaymentsService } from '../src/payments/payments.service';

describe('PaymentsService', () => {
  it('creates idempotent payment intents', () => {
    const service = new PaymentsService();
    const first = service.createIntent({
      orderId: 'o-1',
      amount: 100,
      currency: 'USD',
      method: 'CARD',
      idempotencyKey: 'idem-1',
    });
    const second = service.createIntent({
      orderId: 'o-1',
      amount: 100,
      currency: 'USD',
      method: 'CARD',
      idempotencyKey: 'idem-1',
    });

    expect(first.id).toBe(second.id);
  });
});
