import { Module } from '@nestjs/common';
import { VendorSetupController } from './setup/vendor-setup/vendor.setup.controller';
import { VendorSetupService } from './setup/vendor-setup/vendor.setup.service';
import { VendorSetupModule } from './setup/vendor-setup/vendor.setup.module';
import { PrismaService } from './db/prisma.service';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [VendorSetupModule],
  controllers: [VendorSetupController],
  providers: [VendorSetupService, PrismaService, ConfigService],
})
export class AppModule {}
