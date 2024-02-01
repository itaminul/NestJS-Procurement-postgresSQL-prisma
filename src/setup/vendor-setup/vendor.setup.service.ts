import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { VendoerCreateDto } from './dto/create-vendoer-setup.dto';
import { Request } from 'express';

@Injectable()
export class VendorSetupService {
    constructor(public readonly prisma: PrismaService){}

   async getAll() {
    return  await this.prisma.proVendorSetup.findMany()
   }

   async create(@Body() vendoerCreateDto: VendoerCreateDto) {
    const { vendorName, vendoerDescription, vendoerCountry, vendoerCountryType,vendoerOfficeName,vendoerPhone,vendorOfficeLocation,vendorType,orgId} = vendoerCreateDto;
    await this.prisma.proVendorSetup.create({
       data: {
        vendorName, 
        vendoerDescription,
         vendoerCountry, 
         vendoerCountryType,
         vendoerOfficeName,
         vendoerPhone,
         vendorOfficeLocation,
         vendorType,
         orgId,
         createdBy:1,
         updatedBy:1
       }
    })
   }

}
