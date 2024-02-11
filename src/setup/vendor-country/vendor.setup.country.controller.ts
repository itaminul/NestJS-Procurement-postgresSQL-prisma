import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VendorSetupCountryService } from './vendor.setup.country.service';
import { VendorCountryCreateDto } from './dto/create-vendoer-country.dto';
import { VendorCountryEditDto } from './dto/edit-vendoer-country.dto';

@Controller('vendor-country-setup')
export class VendorSetupCountryController {
  constructor(
    private readonly vendorSetupContryService: VendorSetupCountryService,
  ) {}

  @Get()
  async getVendoer() {
    try {
      const results = await this.vendorSetupContryService.getAll();
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
  async create(@Body() vendorCountryCreateDto: VendorCountryCreateDto) {
    try {
      
      const results = await this.vendorSetupContryService.create(
        vendorCountryCreateDto,
      );
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
  async update(@Param('id') id: number, @Body() vendorCountryEditDto: VendorCountryEditDto) {
    try {
      const results = await this.vendorSetupContryService.update(
        id,
        vendorCountryEditDto,
      );
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
