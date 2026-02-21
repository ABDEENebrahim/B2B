import { Module } from '@nestjs/common';
import { EscrowController } from './escrow/escrow.controller';
import { EscrowService } from './escrow/escrow.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { PaymentsController } from './payments/payments.controller';
import { PaymentsService } from './payments/payments.service';

@Module({
  controllers: [OrdersController, PaymentsController, EscrowController],
  providers: [OrdersService, PaymentsService, EscrowService],
})
export class AppModule {}
