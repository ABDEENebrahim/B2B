import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { QuotesService } from './quotes.service';

@ApiTags('quotes')
@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  findAll() {
    return this.quotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quotesService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateQuoteDto) {
    return this.quotesService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateQuoteDto) {
    return this.quotesService.update(id, dto);
  }

  @Post(':id/withdraw')
  withdraw(@Param('id') id: string) {
    return this.quotesService.withdraw(id);
  }

  @Post(':id/accept')
  accept(@Param('id') id: string) {
    return this.quotesService.accept(id);
  }

  @Post(':id/reject')
  reject(@Param('id') id: string) {
    return this.quotesService.reject(id);
  }
}
