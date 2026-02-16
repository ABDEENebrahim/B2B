import { Module } from '@nestjs/common';
import { QuotesController } from './quotes/quotes.controller';
import { QuotesService } from './quotes/quotes.service';
import { RfqsController } from './rfqs/rfqs.controller';
import { RfqsService } from './rfqs/rfqs.service';

@Module({
  controllers: [RfqsController, QuotesController],
  providers: [RfqsService, QuotesService],
})
export class AppModule {}
