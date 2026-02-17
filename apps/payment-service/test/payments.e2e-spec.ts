import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Payment API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/payments/intent + /payments/confirm/:id', async () => {
    const intent = await request(app.getHttpServer())
      .post('/payments/intent')
      .send({ orderId: 'o1', amount: 120, currency: 'USD', method: 'CARD', idempotencyKey: 'e2e-key' })
      .expect(201);

    await request(app.getHttpServer())
      .post(`/payments/confirm/${intent.body.id}`)
      .expect(201)
      .expect((res) => {
        expect(res.body.status).toBe('HELD');
      });
  });
});
