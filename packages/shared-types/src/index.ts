export type ID = string;

export enum UserRole {
  BUYER = 'BUYER',
  SUPPLIER = 'SUPPLIER',
  ADMIN = 'ADMIN',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  DEACTIVATED = 'DEACTIVATED',
}

export enum VerificationStatus {
  UNVERIFIED = 'UNVERIFIED',
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
}

export enum ProductStatus {
  DRAFT = 'DRAFT',
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  REJECTED = 'REJECTED',
  ARCHIVED = 'ARCHIVED',
}

export enum RFQStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  CLOSED = 'CLOSED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
}

export enum QuoteStatus {
  SUBMITTED = 'SUBMITTED',
  UPDATED = 'UPDATED',
  WITHDRAWN = 'WITHDRAWN',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  EXPIRED = 'EXPIRED',
}

export enum OrderStatus {
  PENDING_CONFIRMATION = 'PENDING_CONFIRMATION',
  CONFIRMED = 'CONFIRMED',
  IN_PRODUCTION = 'IN_PRODUCTION',
  READY_FOR_SHIPMENT = 'READY_FOR_SHIPMENT',
  SHIPPED = 'SHIPPED',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  AUTHORIZED = 'AUTHORIZED',
  HELD_IN_ESCROW = 'HELD_IN_ESCROW',
  PARTIALLY_RELEASED = 'PARTIALLY_RELEASED',
  RELEASED = 'RELEASED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
  DISPUTED = 'DISPUTED',
}

export interface Timestamped {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

export interface UserProfile extends Timestamped {
  id: ID;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  role: UserRole;
  status: UserStatus;
  verificationStatus: VerificationStatus;
}

export interface CompanyProfile extends Timestamped {
  id: ID;
  ownerId: ID;
  legalName: string;
  displayName: string;
  slug: string;
  country: string;
  verificationStatus: VerificationStatus;
}

export interface ProductSummary extends Timestamped {
  id: ID;
  supplierId: ID;
  categoryId: ID;
  title: string;
  slug: string;
  status: ProductStatus;
  minOrderQty?: number | null;
  basePrice?: string | null;
  currency: string;
  isFeatured: boolean;
}

export interface RFQSummary extends Timestamped {
  id: ID;
  buyerId: ID;
  categoryId: ID;
  title: string;
  quantity: number;
  unit: string;
  status: RFQStatus;
  deadline: string;
}

export interface QuoteSummary extends Timestamped {
  id: ID;
  rfqId: ID;
  supplierId: ID;
  price: string;
  currency: string;
  quantity: number;
  status: QuoteStatus;
  validUntil: string;
}

export interface OrderSummary extends Timestamped {
  id: ID;
  quoteId: ID;
  buyerId: ID;
  supplierId: ID;
  orderNumber: string;
  status: OrderStatus;
  totalAmount: string;
  currency: string;
}

export interface PaymentTransactionSummary extends Timestamped {
  id: ID;
  orderId: ID;
  status: PaymentStatus;
  amount: string;
  currency: string;
  transactionDate: string;
}

export interface HealthCheckResponse {
  service: string;
  status: 'ok' | 'degraded' | 'down';
  timestamp: string;
  dependencies?: Record<string, 'ok' | 'degraded' | 'down'>;
}
