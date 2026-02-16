import { IsEnum, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { CreateQuoteDto } from './create-quote.dto';

export class UpdateQuoteDto extends PartialType(CreateQuoteDto) {
  @IsOptional()
  @IsEnum(['SUBMITTED', 'WITHDRAWN', 'ACCEPTED', 'REJECTED'])
  status?: 'SUBMITTED' | 'WITHDRAWN' | 'ACCEPTED' | 'REJECTED';
}
