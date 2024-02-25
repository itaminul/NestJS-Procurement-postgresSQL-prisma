import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ItemSetupService } from './item-setup.service';
import { CreateItemDto } from './dto/create.item.dto';
import { UpdateItemDto } from './dto/update.item.dto';
import { FileInterceptor } from '@nestjs/platform-express'
@Controller('item-setup')
export class ItemSetupController {
  constructor(public readonly itemSetupService: ItemSetupService) {};
  @Get()
  async getAll () {
    try {
      const results = await this.itemSetupService.getAll();
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
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file: Express.Multer.File, @Body() createItemDto: CreateItemDto) {
    try {
      const results = await this.itemSetupService.create(file,createItemDto);
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
  async update(@Param('id') id: number, updateItemDto:UpdateItemDto) {
    try {
      const results = await this.itemSetupService.update(id, updateItemDto);
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
