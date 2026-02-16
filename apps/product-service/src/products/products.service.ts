import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Product } from '../common/types/domain.types';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products = new Map<string, Product>();

  findAll(): Product[] {
    return [...this.products.values()];
  }

  findOne(id: string): Product {
    const product = this.products.get(id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  create(dto: CreateProductDto): Product {
    const now = new Date().toISOString();
    const product: Product = {
      id: randomUUID(),
      supplierId: dto.supplierId,
      categoryId: dto.categoryId,
      title: dto.title,
      slug: dto.slug,
      description: dto.description,
      basePrice: dto.basePrice,
      currency: dto.currency,
      minOrderQty: dto.minOrderQty,
      originCountry: dto.originCountry,
      status: dto.status ?? 'DRAFT',
      isFeatured: dto.isFeatured ?? false,
      createdAt: now,
      updatedAt: now,
    };

    this.products.set(product.id, product);
    return product;
  }

  update(id: string, dto: UpdateProductDto): Product {
    const product = this.findOne(id);
    const updated: Product = {
      ...product,
      ...dto,
      updatedAt: new Date().toISOString(),
    };
    this.products.set(id, updated);
    return updated;
  }

  remove(id: string): { success: true } {
    this.findOne(id);
    this.products.delete(id);
    return { success: true };
  }

  setStatus(id: string, status: Product['status']): Product {
    return this.update(id, { status });
  }

  listFeatured(): Product[] {
    return this.findAll().filter((product) => product.isFeatured && product.status === 'ACTIVE');
  }
}
