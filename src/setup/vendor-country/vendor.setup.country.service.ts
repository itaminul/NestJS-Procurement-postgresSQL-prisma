import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { VendorCountryCreateDto } from './dto/create-vendoer-country.dto';
import { VendorCountryEditDto } from './dto/edit-vendoer-country.dto';

@Injectable()
export class VendorSetupCountryService {
  constructor(public readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.proVendorCountry.findMany();
  }

  async create(@Body() vendoerCountryCreateDto: VendorCountryCreateDto) {
    const { countryName, orgId } = vendoerCountryCreateDto;
    await this.prisma.proVendorCountry.create({
      data: {
        countryName,
        orgId,
        createdBy: 1,
      },
    });
  }

  async update(
    @Param('id') id: number,
    @Body() vendorCountryEditDto: VendorCountryEditDto,
  ) {
    const { countryName, orgId } = vendorCountryEditDto;
    await this.prisma.proVendorCountry.update({
      where: {
        id: Number(id),
      },
      data: {
        countryName,
        orgId,
        updatedBy: 1,
      },
    });
  }
}
