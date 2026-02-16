import { IsEnum, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { CreateRfqDto } from './create-rfq.dto';

export class UpdateRfqDto extends PartialType(CreateRfqDto) {
  @IsOptional()
  @IsEnum(['DRAFT', 'PUBLISHED', 'CLOSED', 'CANCELLED'])
  status?: 'DRAFT' | 'PUBLISHED' | 'CLOSED' | 'CANCELLED';
}
