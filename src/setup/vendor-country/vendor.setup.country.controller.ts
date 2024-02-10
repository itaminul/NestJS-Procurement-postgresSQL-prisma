import { Body, Controller, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { VendoerCreateDto } from './dto/create-vendoer-setup.dto';
import { VendoerEditDto } from './dto/edit-vendoer-setup.dto';
import { VendorSetupCountryService } from './vendor.setup.country.service';

@Controller('vendorsetup')
export class VendorSetupCountryController {
    constructor(private readonly vendorSetupContryService: VendorSetupCountryService ) {}
    
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
    async create(@Body() vendoerCreateDto: VendoerCreateDto) {
        try {
            const results = await this.vendorSetupContryService.create(vendoerCreateDto);
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
    async update(@Param('id') id: number, @Body() vendorEditDto: VendoerEditDto) {
        try {            
            const results = await this.vendorSetupContryService.update(id,vendorEditDto);
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
