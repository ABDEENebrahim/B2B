import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QuotesService } from '../quotes/quotes.service';
import { CreateRfqDto } from './dto/create-rfq.dto';
import { UpdateRfqDto } from './dto/update-rfq.dto';
import { RfqsService } from './rfqs.service';

@ApiTags('rfqs')
@Controller('rfqs')
export class RfqsController {
  constructor(
    private readonly rfqsService: RfqsService,
    private readonly quotesService: QuotesService,
  ) {}

  @Get()
  findAll() {
    return this.rfqsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rfqsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateRfqDto) {
    return this.rfqsService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateRfqDto) {
    return this.rfqsService.update(id, dto);
  }

  @Post(':id/publish')
  publish(@Param('id') id: string) {
    return this.rfqsService.publish(id);
  }

  @Post(':id/close')
  close(@Param('id') id: string) {
    return this.rfqsService.close(id);
  }

  @Post(':id/cancel')
  cancel(@Param('id') id: string) {
    return this.rfqsService.cancel(id);
  }

  @Get(':id/quotes')
  listQuotes(@Param('id') id: string) {
    return this.rfqsService.listQuotes(id, this.quotesService.findAll());
  }
}
