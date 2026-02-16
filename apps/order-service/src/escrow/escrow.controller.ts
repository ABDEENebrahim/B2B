import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EscrowService } from './escrow.service';

@ApiTags('escrow')
@Controller('escrow')
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @Post('release/:transactionId')
  release(@Param('transactionId') transactionId: string) {
    return this.escrowService.release(transactionId);
  }

  @Get(':orderId/status')
  status(@Param('orderId') orderId: string) {
    return this.escrowService.status(orderId);
  }
}
