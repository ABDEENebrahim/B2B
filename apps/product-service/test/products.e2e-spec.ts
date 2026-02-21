import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Products API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/products (POST + GET)', async () => {
    const created = await request(app.getHttpServer())
      .post('/products')
      .send({
        supplierId: 'sup-1',
        categoryId: 'cat-1',
        title: 'Hex Nut',
        slug: 'hex-nut',
        basePrice: 0.4,
        currency: 'USD',
        minOrderQty: 200,
      })
      .expect(201);

    await request(app.getHttpServer())
      .get(`/products/${created.body.id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.slug).toBe('hex-nut');
      });
  });
});
