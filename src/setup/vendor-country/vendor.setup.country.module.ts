import { Injectable, Module } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { ConfigService } from '@nestjs/config';
import { VendorSetupCountryService } from './vendor.setup.country.service';
import { VendorSetupCountryController } from './vendor.setup.country.controller';
@Module({
  providers: [VendorSetupCountryService, PrismaService, ConfigService],
  controllers: [VendorSetupCountryController]
})

export class VendorSetupCountryModule {}
