import { Controller, Get } from '@nestjs/common';
import { VendorSetupService } from './vendor-setup.service';

@Controller('vendorsetup')
export class VendorSetupController {
    constructor(private readonly vendorService: VendorSetupService ) {}

    @Get()
    getVendoer() {
        try {
            const result = this.vendorService.getVendor();
            return result;
        } catch (error) {
            console.log("error", error);
        }
    }
    
}
