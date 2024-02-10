import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { VendoerCreateDto } from './dto/create-vendoer-setup.dto';
import { Request } from 'express';
import { VendoerEditDto } from './dto/edit-vendoer-setup.dto';

@Injectable()
export class VendorSetupCountryService {
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
         createdBy:1
       }
    })
   }

   async update(@Param('id') id: number, @Body() vendoerEditDto: VendoerEditDto) {
      const { vendorName, vendoerDescription, vendoerCountry, vendoerCountryType,vendoerOfficeName,vendoerPhone,vendorOfficeLocation,vendorType,orgId} = vendoerEditDto;
      await this.prisma.proVendorSetup.update({
         where: {
            id: Number(id)
         },
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
           updatedBy:1
         }
      })
     }

}
