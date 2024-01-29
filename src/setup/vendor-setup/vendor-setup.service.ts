import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { VendoerCreateDto } from './dto/create-vendoer-setup.dto';

@Injectable()
export class VendorSetupService {
    constructor(public readonly prismaService: PrismaService){}
   async getVendor() {
        return await this.prismaService.vendoer_setup.findMany({
            orderBy: [
                {
                    id: 'desc'
                },
                
            ],
            where: {
                orgId: 1
            }
        })

    }

    async create(@Body() createVendoerDto: VendoerCreateDto) {
        const { vendorName, vendoerDescription,vendoerCountry,vendoerCountryType,vendoerOfficeName,vendoerPhone,vendorOfficeLocation,vendorType,orgId } = createVendoerDto;
         await this.prismaService.vendoer_setup.create({
            data: {
                vendorName, 
                vendoerDescription,
                vendoerCountry,
                vendoerCountryType,
                vendoerOfficeName,
                vendoerPhone,
                vendorOfficeLocation,
                vendorType,
                orgId
            }
        })
    }
}
