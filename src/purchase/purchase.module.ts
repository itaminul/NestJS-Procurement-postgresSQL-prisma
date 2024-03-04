import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';

@Module({
  providers: [PurchaseService],
  controllers: [PurchaseController],  
})
export class PurchaseModule {}
