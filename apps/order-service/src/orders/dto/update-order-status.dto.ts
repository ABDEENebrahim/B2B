import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateOrderStatusDto {
  @IsEnum([
    'PENDING_CONFIRMATION',
    'CONFIRMED',
    'IN_PRODUCTION',
    'READY_FOR_SHIPMENT',
    'SHIPPED',
    'DELIVERED',
    'COMPLETED',
    'CANCELLED',
  ])
  status!:
    | 'PENDING_CONFIRMATION'
    | 'CONFIRMED'
    | 'IN_PRODUCTION'
    | 'READY_FOR_SHIPMENT'
    | 'SHIPPED'
    | 'DELIVERED'
    | 'COMPLETED'
    | 'CANCELLED';

  @IsOptional()
  @IsString()
  trackingNumber?: string;
}
