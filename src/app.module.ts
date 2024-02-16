import { Module } from '@nestjs/common';
import { VendorSetupController } from './setup/vendor-setup/vendor.setup.controller';
import { VendorSetupService } from './setup/vendor-setup/vendor.setup.service';
import { VendorSetupModule } from './setup/vendor-setup/vendor.setup.module';
import { PrismaService } from './db/prisma.service';
import { ConfigService } from '@nestjs/config';
import { VendorSetupCountryModule } from './setup/vendor-country/vendor.setup.country.module';
import { VendorSetupCountryController } from './setup/vendor-country/vendor.setup.country.controller';
import { VendorSetupCountryService } from './setup/vendor-country/vendor.setup.country.service';
import { ItemSetupModule } from './procurements/item-setup/item-setup.module';
@Module({
  imports: [VendorSetupModule, VendorSetupCountryModule, ItemSetupModule],
  controllers: [VendorSetupController, VendorSetupCountryController],
  providers: [VendorSetupService, PrismaService, ConfigService, VendorSetupCountryService],
})
export class AppModule {}
