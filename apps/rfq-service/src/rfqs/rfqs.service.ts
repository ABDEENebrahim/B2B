import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Quote } from '../common/types/domain.types';
import { CreateRfqDto } from './dto/create-rfq.dto';
import { UpdateRfqDto } from './dto/update-rfq.dto';
import { RFQ } from '../common/types/domain.types';

@Injectable()
export class RfqsService {
  private rfqs = new Map<string, RFQ>();

  findAll() {
    return [...this.rfqs.values()];
  }

  findOne(id: string) {
    const rfq = this.rfqs.get(id);
    if (!rfq) throw new NotFoundException('RFQ not found');
    return rfq;
  }

  create(dto: CreateRfqDto) {
    const now = new Date().toISOString();
    const rfq: RFQ = {
      id: randomUUID(),
      buyerId: dto.buyerId,
      title: dto.title,
      description: dto.description,
      categoryId: dto.categoryId,
      quantity: dto.quantity,
      unit: dto.unit,
      targetPrice: dto.targetPrice,
      deadline: dto.deadline,
      visibility: dto.visibility ?? 'PUBLIC',
      status: 'DRAFT',
      createdAt: now,
      updatedAt: now,
    };
    this.rfqs.set(rfq.id, rfq);
    return rfq;
  }

  update(id: string, dto: UpdateRfqDto) {
    const current = this.findOne(id);
    if (current.status !== 'DRAFT' && dto.title) {
      throw new BadRequestException('Cannot edit published RFQ title');
    }
    const updated: RFQ = {
      ...current,
      ...dto,
      updatedAt: new Date().toISOString(),
    };
    this.rfqs.set(id, updated);
    return updated;
  }

  publish(id: string) {
    const rfq = this.findOne(id);
    return this.update(id, { ...rfq, status: 'PUBLISHED' });
  }

  close(id: string) {
    return this.update(id, { status: 'CLOSED' });
  }

  cancel(id: string) {
    return this.update(id, { status: 'CANCELLED' });
  }

  canReceiveQuotes(rfq: RFQ): boolean {
    return rfq.status === 'PUBLISHED' && new Date(rfq.deadline) > new Date();
  }

  listQuotes(id: string, quotes: Quote[]) {
    this.findOne(id);
    return quotes.filter((quote) => quote.rfqId === id);
  }
}
