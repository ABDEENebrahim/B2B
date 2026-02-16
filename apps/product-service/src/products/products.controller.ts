import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SearchProductsQueryDto } from '../search/dto/search-products-query.dto';
import { SearchService } from '../search/search.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly searchService: SearchService,
  ) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('search')
  search(@Query() query: SearchProductsQueryDto) {
    return this.searchService.search(query);
  }

  @Get('featured')
  featured() {
    return this.productsService.listFeatured();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productsService.update(id, dto);
  }

  @Patch(':id/status')
  setStatus(@Param('id') id: string, @Body('status') status: 'DRAFT' | 'PENDING' | 'ACTIVE' | 'REJECTED') {
    return this.productsService.setStatus(id, status);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
