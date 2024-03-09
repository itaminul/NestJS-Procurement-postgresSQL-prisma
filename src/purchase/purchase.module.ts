import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { EmailService } from 'src/service/EmailService';

@Module({
  providers: [PurchaseService, EmailService],
  controllers: [PurchaseController],  
})
export class PurchaseModule {}
