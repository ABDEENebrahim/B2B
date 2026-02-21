import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('RFQ API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/rfqs (POST + publish + quote)', async () => {
    const rfq = await request(app.getHttpServer())
      .post('/rfqs')
      .send({
        buyerId: 'buyer-e2e',
        title: 'M8 bolts RFQ',
        description: 'Need 50k pcs',
        categoryId: 'cat-fasteners',
        quantity: 50000,
        unit: 'pcs',
        deadline: new Date(Date.now() + 5 * 86400000).toISOString(),
      })
      .expect(201);

    await request(app.getHttpServer()).post(`/rfqs/${rfq.body.id}/publish`).expect(201);

    await request(app.getHttpServer())
      .post('/quotes')
      .send({
        rfqId: rfq.body.id,
        supplierId: 'supplier-e2e',
        price: 0.09,
        quantity: 50000,
        deliveryTimeDays: 14,
        validUntil: new Date(Date.now() + 3 * 86400000).toISOString(),
      })
      .expect(201);

    await request(app.getHttpServer()).get(`/rfqs/${rfq.body.id}/quotes`).expect(200);
  });
});
