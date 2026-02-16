import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Category } from '../common/types/domain.types';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  private categories = new Map<string, Category>();

  constructor() {
    const now = new Date().toISOString();
    const root: Category = {
      id: randomUUID(),
      name: 'Industrial Fasteners',
      slug: 'industrial-fasteners',
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };
    this.categories.set(root.id, root);
  }

  findAll(): Category[] {
    return [...this.categories.values()];
  }

  findOne(id: string): Category {
    const category = this.categories.get(id);
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  create(dto: CreateCategoryDto): Category {
    const now = new Date().toISOString();
    const category: Category = {
      id: randomUUID(),
      name: dto.name,
      slug: dto.slug,
      parentId: dto.parentId,
      isActive: dto.isActive ?? true,
      createdAt: now,
      updatedAt: now,
    };
    this.categories.set(category.id, category);
    return category;
  }

  update(id: string, dto: UpdateCategoryDto): Category {
    const category = this.findOne(id);
    const updated: Category = {
      ...category,
      ...dto,
      updatedAt: new Date().toISOString(),
    };
    this.categories.set(id, updated);
    return updated;
  }

  remove(id: string): { success: true } {
    this.findOne(id);
    this.categories.delete(id);
    return { success: true };
  }
}
