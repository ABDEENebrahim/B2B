import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { SearchProductsQueryDto } from './dto/search-products-query.dto';

@Injectable()
export class SearchService {
  constructor(private readonly productsService: ProductsService) {}

  search(query: SearchProductsQueryDto) {
    const page = Number(query.page ?? '1');
    const pageSize = Number(query.pageSize ?? '20');

    let records = this.productsService.findAll();

    if (query.categoryId) {
      records = records.filter((product) => product.categoryId === query.categoryId);
    }

    if (query.q) {
      const term = query.q.toLowerCase();
      records = records.filter(
        (product) =>
          product.title.toLowerCase().includes(term) ||
          product.description?.toLowerCase().includes(term),
      );
    }

    if (query.sort === 'price') {
      records = [...records].sort((a, b) => a.basePrice - b.basePrice);
    }

    if (query.sort === 'newest') {
      records = [...records].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    }

    const total = records.length;
    const start = (page - 1) * pageSize;

    return {
      data: records.slice(start, start + pageSize),
      meta: {
        total,
        page,
        pageSize,
      },
    };
  }
}
