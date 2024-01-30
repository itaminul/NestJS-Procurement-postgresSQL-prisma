import { Injectable, Module } from '@nestjs/common';
import { VendorSetupService } from './vendor.setup.service';
import { VendorSetupController } from './vendor.setup.controller';
import { PrismaService } from 'src/db/prisma.service';
import { ConfigService } from '@nestjs/config';
@Module({
  providers: [VendorSetupService, PrismaService, ConfigService],
  controllers: [VendorSetupController]
})

export class VendorSetupModule {}
