export type RFQStatus = 'DRAFT' | 'PUBLISHED' | 'CLOSED' | 'CANCELLED';
export type QuoteStatus = 'SUBMITTED' | 'WITHDRAWN' | 'ACCEPTED' | 'REJECTED';

export interface RFQ {
  id: string;
  buyerId: string;
  title: string;
  description: string;
  categoryId: string;
  quantity: number;
  unit: string;
  targetPrice?: number;
  deadline: string;
  visibility: 'PUBLIC' | 'PRIVATE' | 'INVITE_ONLY';
  status: RFQStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Quote {
  id: string;
  rfqId: string;
  supplierId: string;
  price: number;
  quantity: number;
  deliveryTimeDays: number;
  validUntil: string;
  status: QuoteStatus;
  createdAt: string;
  updatedAt: string;
}
