import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VendorSetupService } from './vendor.setup.service';
import { VendorCreateDto } from './dto/create-vendor-setup.dto';
import { VendorEditDto } from './dto/edit-vendor-setup.dto';

@Controller('vendorsetup')
export class VendorSetupController {
  constructor(private readonly vendorService: VendorSetupService) {}

  @Get()
  async getVendoer() {
    try {
      const results = await this.vendorService.getAll();
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
  async create(@Body() vendoerCreateDto: VendorCreateDto) {
    try {
      const results = await this.vendorService.create(vendoerCreateDto);
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Patch(':id')
  async update(@Param('id') id: number, @Body() vendorEditDto: VendorEditDto) {
    try {
      const results = await this.vendorService.update(id, vendorEditDto);
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
