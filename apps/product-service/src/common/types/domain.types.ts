export type ProductStatus = 'DRAFT' | 'PENDING' | 'ACTIVE' | 'REJECTED';

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  supplierId: string;
  categoryId: string;
  title: string;
  slug: string;
  description?: string;
  basePrice: number;
  currency: string;
  minOrderQty: number;
  originCountry?: string;
  status: ProductStatus;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}
