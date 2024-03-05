import { Body, Controller, Get, HttpStatus, Patch, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseItemDto } from './dto/create.purchase.item.dto';

@Controller('purchase')
export class PurchaseController {
    constructor(public readonly purchaseService: PurchaseService) {}
    @Get()
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

    @Post()
    async create(@Body() dto: CreatePurchaseItemDto) {
        try {
            
            const results = await this.purchaseService.create(dto);
            return {
              success: true,
              status: HttpStatus.OK,
              results,
            };
          } catch (error) {
            return { success: false, message: error.message };
          }
    }
    @Patch('/:id')
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
