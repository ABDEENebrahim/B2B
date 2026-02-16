import { RfqsService } from '../src/rfqs/rfqs.service';

describe('RfqsService', () => {
  it('creates and publishes an RFQ', () => {
    const service = new RfqsService();
    const created = service.create({
      buyerId: 'buyer-1',
      title: 'Need steel bolts',
      description: 'ISO certified supplier needed',
      categoryId: 'cat-1',
      quantity: 1000,
      unit: 'pcs',
      deadline: new Date(Date.now() + 86400000).toISOString(),
    });

    const published = service.publish(created.id);
    expect(published.status).toBe('PUBLISHED');
  });
});
