import { Module } from '@nestjs/common';
import { VendorSetupService } from './vendor-setup.service';

@Module({
  providers: [VendorSetupService]
})
export class VendoerSetupModule {}
