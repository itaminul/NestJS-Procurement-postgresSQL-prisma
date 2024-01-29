import { Module } from '@nestjs/common';
import { VendorSetupService } from './vendor-setup.service';
import { VendorSetupController } from './vendor-setup.controller';

@Module({
  providers: [VendorSetupService],
  controllers: [VendorSetupController]
})

export class VendoerSetupModule {}
