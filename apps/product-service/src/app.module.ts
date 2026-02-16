import { Module } from '@nestjs/common';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { SearchService } from './search/search.service';

@Module({
  imports: [],
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService, CategoriesService, SearchService],
})
export class AppModule {}
