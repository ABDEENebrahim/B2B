import { IsIn, IsNumberString, IsOptional, IsString } from 'class-validator';

export class SearchProductsQueryDto {
  @IsOptional()
  @IsString()
  q?: string;

  @IsOptional()
  @IsString()
  categoryId?: string;

  @IsOptional()
  @IsIn(['relevance', 'price', 'newest'])
  sort?: 'relevance' | 'price' | 'newest';

  @IsOptional()
  @IsNumberString()
  page?: string;

  @IsOptional()
  @IsNumberString()
  pageSize?: string;
}
