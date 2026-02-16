import { OrdersService } from '../src/orders/orders.service';

describe('OrdersService', () => {
  it('creates order and transitions workflow', () => {
    const service = new OrdersService();
    const order = service.create({
      quoteId: 'q1',
      buyerId: 'b1',
      supplierId: 's1',
      totalAmount: 500,
      currency: 'USD',
    });

    const confirmed = service.transition(order.id, 'CONFIRMED');
    expect(confirmed.status).toBe('CONFIRMED');
  });
});
