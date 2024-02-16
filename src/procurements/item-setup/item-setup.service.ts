import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateItemDto } from './dto/create.item.dto';
import { UpdateItemDto } from './dto/update.item.dto';

@Injectable()
export class ItemSetupService {
  constructor(public readonly prisma: PrismaService){}
   getAll() {
    return this.prisma.invItemSetup.findMany();
  }

  create(@Body() dto: CreateItemDto) {
    const { itemName, itemCode, itemDescription, itemGroupId,itemImage} = dto;
    return this.prisma.invItemSetup.create({
      data: {
        itemName,
        itemCode,
        itemDescription,
        itemGroupId,
        itemImage,
      },
    });
  }
  update(@Param('id') id: number, dto: UpdateItemDto){
    const { itemCode, itemDescription, itemGroupId, itemImage, itemName }= dto;
    return this.prisma.invItemSetup.update({
      where: {
        id: Number(id),
      },
      data: {
        itemCode,
        itemDescription,
        itemGroupId,
        itemImage,
        itemName,
      },
    });
  }
}
