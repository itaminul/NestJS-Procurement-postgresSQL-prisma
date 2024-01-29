import { Module } from '@nestjs/common';
import { VendorSetupController } from './setup/vendor-setup/vendor-setup.controller';
import { VendorSetupService } from './setup/vendor-setup/vendor-setup.service';
import { VendoerSetupModule } from './setup/vendor-setup/vendoer-setup.module';

@Module({
  imports: [VendoerSetupModule],
  controllers: [VendorSetupController],
  providers: [VendorSetupService],
})
export class AppModule {}
