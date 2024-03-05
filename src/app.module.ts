import { Module } from '@nestjs/common';
import { VendorSetupController } from './setup/vendor-setup/vendor.setup.controller';
import { VendorSetupService } from './setup/vendor-setup/vendor.setup.service';
import { VendorSetupModule } from './setup/vendor-setup/vendor.setup.module';
import { PrismaService } from './db/prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { VendorSetupCountryModule } from './setup/vendor-country/vendor.setup.country.module';
import { VendorSetupCountryController } from './setup/vendor-country/vendor.setup.country.controller';
import { VendorSetupCountryService } from './setup/vendor-country/vendor.setup.country.service';
import { ItemSetupModule } from './procurements/item-setup/item-setup.module';
import { PrismaModule } from './db/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from './file-upload/upload.service';
import { UploadController } from './file-upload/upload.controller';
import { ItemSetupController } from './procurements/item-setup/item-setup.controller';
import { ItemSetupService } from './procurements/item-setup/item-setup.service';
import { PurchaseModule } from './purchase/purchase.module';
import { PurchaseController } from './purchase/purchase.controller';
import { PurchaseService } from './purchase/purchase.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailService } from './service/EmailService';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    MailerModule.forRoot({
      transport: {
        host: 'mail.atilimited.net',
        port: 465,
        secure: true,
        auth: {
          user: 'dev@atilimited.net',
          pass: 'Ai%+5$t!0_Xy',
        },
      },
      defaults: {
        from: 'dev@atilimited.net',
      },
    }),

    PrismaModule,
    VendorSetupModule,
    VendorSetupCountryModule,
    ItemSetupModule,
    PurchaseModule
  ],
  controllers: [VendorSetupController, VendorSetupCountryController, UploadController, ItemSetupController, PurchaseController],
  providers: [
    VendorSetupService,
    PrismaService,
    ConfigService,
    VendorSetupCountryService,
    UploadService,
    ItemSetupService,
    PurchaseService,
    EmailService
  ],
})
export class AppModule {}
