import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Order, OrderStatus } from '../common/types/domain.types';
import { CreateOrderDto } from './dto/create-order.dto';

const ORDER_FLOW: OrderStatus[] = [
  'PENDING_CONFIRMATION',
  'CONFIRMED',
  'IN_PRODUCTION',
  'READY_FOR_SHIPMENT',
  'SHIPPED',
  'DELIVERED',
  'COMPLETED',
];

@Injectable()
export class OrdersService {
  private orders = new Map<string, Order>();

  findAll() {
    return [...this.orders.values()];
  }

  findOne(id: string) {
    const order = this.orders.get(id);
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  create(dto: CreateOrderDto) {
    const now = new Date().toISOString();
    const order: Order = {
      id: randomUUID(),
      quoteId: dto.quoteId,
      buyerId: dto.buyerId,
      supplierId: dto.supplierId,
      totalAmount: dto.totalAmount,
      currency: dto.currency,
      status: 'PENDING_CONFIRMATION',
      createdAt: now,
      updatedAt: now,
    };
    this.orders.set(order.id, order);
    return order;
  }

  transition(id: string, nextStatus: OrderStatus, trackingNumber?: string) {
    const current = this.findOne(id);
    if (nextStatus === 'CANCELLED') {
      return this.update(id, { status: 'CANCELLED' });
    }

    const currentIndex = ORDER_FLOW.indexOf(current.status);
    const nextIndex = ORDER_FLOW.indexOf(nextStatus);

    if (nextIndex !== currentIndex + 1) {
      throw new BadRequestException('Invalid order status transition');
    }

    return this.update(id, { status: nextStatus, trackingNumber });
  }

  private update(id: string, payload: Partial<Order>) {
    const current = this.findOne(id);
    const updated: Order = {
      ...current,
      ...payload,
      updatedAt: new Date().toISOString(),
    };
    this.orders.set(id, updated);
    return updated;
  }
}
