import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Quote } from '../common/types/domain.types';
import { RfqsService } from '../rfqs/rfqs.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';

@Injectable()
export class QuotesService {
  private quotes = new Map<string, Quote>();

  constructor(private readonly rfqsService: RfqsService) {}

  findAll() {
    return [...this.quotes.values()];
  }

  findOne(id: string) {
    const quote = this.quotes.get(id);
    if (!quote) throw new NotFoundException('Quote not found');
    return quote;
  }

  create(dto: CreateQuoteDto) {
    const rfq = this.rfqsService.findOne(dto.rfqId);
    if (!this.rfqsService.canReceiveQuotes(rfq)) {
      throw new BadRequestException('RFQ not open for quotes');
    }

    const existing = [...this.quotes.values()].find(
      (quote) => quote.rfqId === dto.rfqId && quote.supplierId === dto.supplierId,
    );
    if (existing) throw new BadRequestException('Supplier already quoted this RFQ');

    const now = new Date().toISOString();
    const quote: Quote = {
      id: randomUUID(),
      rfqId: dto.rfqId,
      supplierId: dto.supplierId,
      price: dto.price,
      quantity: dto.quantity,
      deliveryTimeDays: dto.deliveryTimeDays,
      validUntil: dto.validUntil,
      status: 'SUBMITTED',
      createdAt: now,
      updatedAt: now,
    };

    this.quotes.set(quote.id, quote);
    return quote;
  }

  update(id: string, dto: UpdateQuoteDto) {
    const current = this.findOne(id);
    if (current.status === 'ACCEPTED' || current.status === 'REJECTED') {
      throw new BadRequestException('Finalized quote cannot be edited');
    }
    const updated: Quote = {
      ...current,
      ...dto,
      updatedAt: new Date().toISOString(),
    };
    this.quotes.set(id, updated);
    return updated;
  }

  withdraw(id: string) {
    return this.update(id, { status: 'WITHDRAWN' });
  }

  accept(id: string) {
    const quote = this.findOne(id);
    const siblingAccepted = [...this.quotes.values()].some(
      (item) => item.rfqId === quote.rfqId && item.status === 'ACCEPTED' && item.id !== id,
    );
    if (siblingAccepted) {
      throw new BadRequestException('An RFQ can only have one accepted quote');
    }
    return this.update(id, { status: 'ACCEPTED' });
  }

  reject(id: string) {
    return this.update(id, { status: 'REJECTED' });
  }
}
