import { Controller, HttpStatus } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
    constructor(public readonly purchaseService: PurchaseService) {}
    async getAll(){
        try {
            
            const results = await this.purchaseService.getAll();
            return {
              success: true,
              status: HttpStatus.OK,
              results,
            };
          } catch (error) {
            return { success: false, message: error.message };
          }
    }

    async create() {
        try {
            
            const results = await this.purchaseService.create();
            return {
              success: true,
              status: HttpStatus.OK,
              results,
            };
          } catch (error) {
            return { success: false, message: error.message };
          }
    }
    
    async updatePurchase() {
        try {
            
            const results = await this.purchaseService.updatePurchase();
            return {
              success: true,
              status: HttpStatus.OK,
              results,
            };
          } catch (error) {
            return { success: false, message: error.message };
          }
    }
}
