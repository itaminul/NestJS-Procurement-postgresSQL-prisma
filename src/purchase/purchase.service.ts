import { Body, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/db/prisma.service';
import { CreatePurchaseItemDto } from './dto/create.purchase.item.dto';

@Injectable()
export class PurchaseService {
    constructor(public readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.bO_PUR_ITEM.findMany();
    }

    create(@Body() dto: CreatePurchaseItemDto) {
        const { proditm_id, proditm_nm, purch_yymm, purinfo_id, puritem_qty, unit_price, taxamt_pct, vatamt_pct,reqitm_qty,tax_amount, vat_amount,totitm_amt} =dto;
        return this.prisma.bO_PUR_ITEM.create({
            data: {
                proditm_id, proditm_nm, purch_yymm, purinfo_id, puritem_qty, unit_price, taxamt_pct, vatamt_pct,reqitm_qty,tax_amount, vat_amount,totitm_amt
            }
        });
    }

    updatePurchase() {
        return 'update';
    }
}
