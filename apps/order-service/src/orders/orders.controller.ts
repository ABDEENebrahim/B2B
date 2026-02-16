import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.ordersService.create(dto);
  }

  @Post(':id/confirm')
  confirm(@Param('id') id: string) {
    return this.ordersService.transition(id, 'CONFIRMED');
  }

  @Post(':id/production')
  production(@Param('id') id: string) {
    return this.ordersService.transition(id, 'IN_PRODUCTION');
  }

  @Post(':id/ready-for-shipment')
  ready(@Param('id') id: string) {
    return this.ordersService.transition(id, 'READY_FOR_SHIPMENT');
  }

  @Post(':id/ship')
  ship(@Param('id') id: string, @Body('trackingNumber') trackingNumber?: string) {
    return this.ordersService.transition(id, 'SHIPPED', trackingNumber);
  }

  @Post(':id/deliver')
  deliver(@Param('id') id: string) {
    return this.ordersService.transition(id, 'DELIVERED');
  }

  @Post(':id/complete')
  complete(@Param('id') id: string) {
    return this.ordersService.transition(id, 'COMPLETED');
  }

  @Post(':id/cancel')
  cancel(@Param('id') id: string) {
    return this.ordersService.transition(id, 'CANCELLED');
  }
}
