import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { VendorSetupService } from './vendor.setup.service';
import { VendoerCreateDto } from './dto/create-vendoer-setup.dto';

@Controller('vendorsetup')
export class VendorSetupController {
    constructor(private readonly vendorService: VendorSetupService ) {}
    
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
    async create(@Body() vendoerCreateDto: VendoerCreateDto) {
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
    
}
