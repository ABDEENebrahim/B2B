import { ProductsService } from '../src/products/products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    service = new ProductsService();
  });

  it('creates and retrieves a product', () => {
    const created = service.create({
      supplierId: 's1',
      categoryId: 'c1',
      title: 'Sample Bolt',
      slug: 'sample-bolt',
      basePrice: 1.23,
      currency: 'USD',
      minOrderQty: 10,
    });

    expect(service.findOne(created.id).slug).toBe('sample-bolt');
  });
});
