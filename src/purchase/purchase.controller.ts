import { Body, Controller, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseItemDto } from './dto/create.purchase.item.dto';
import { EmailService } from 'src/service/EmailService';
import { UpdatePurchaseItemDto } from './dto/update.purchase.item.dto';

@Controller('purchase')
export class PurchaseController {
    constructor(public readonly purchaseService: PurchaseService, public readonly emailService: EmailService) {}
    @Get()
    async getAll(){
        try {
            
            const results = await this.purchaseService.getAll();
           // await this.emailService.sendEmail()
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
    async updatePurchase(@Param('id') id: number, @Body() updateDto: UpdatePurchaseItemDto) {
        try {
            
            const results = await this.purchaseService.updatePurchase(id, updateDto);
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
