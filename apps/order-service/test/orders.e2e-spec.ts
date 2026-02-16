import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Order API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/orders + /payments + /escrow flow', async () => {
    const order = await request(app.getHttpServer())
      .post('/orders')
      .send({ quoteId: 'q1', buyerId: 'b1', supplierId: 's1', totalAmount: 300, currency: 'USD' })
      .expect(201);

    await request(app.getHttpServer()).post(`/orders/${order.body.id}/confirm`).expect(201);

    const payment = await request(app.getHttpServer())
      .post('/payments/intent')
      .send({ orderId: order.body.id, amount: 300, currency: 'USD', method: 'CARD' })
      .expect(201);

    await request(app.getHttpServer())
      .post(`/escrow/release/${payment.body.id}`)
      .expect(201)
      .expect((res) => {
        expect(res.body.status).toBe('RELEASED');
      });
  });
});
