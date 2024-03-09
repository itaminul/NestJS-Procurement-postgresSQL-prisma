import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreatePurchaseItemDto } from './dto/create.purchase.item.dto';
import { UpdatePurchaseItemDto } from './dto/update.purchase.item.dto';

@Injectable()
export class PurchaseService {
    constructor(public readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.bO_PUR_ITEM.findMany();
    }

    create(@Body() dto: CreatePurchaseItemDto) {
        const {
             proditm_id,
             proditm_nm,
             purch_yymm,
             purinfo_id,
             puritem_qty,
             unit_price,
             taxamt_pct,
             vatamt_pct,
             reqitm_qty,
             tax_amount,
             vat_amount,
             totitm_amt,
             warnty_dur,
             wtydur_type,
             wrnty_info
                } =dto;
        return this.prisma.bO_PUR_ITEM.create({
            data: {
                proditm_id,
                proditm_nm,
                purch_yymm,
                purinfo_id,
                puritem_qty,
                unit_price,
                taxamt_pct,
                vatamt_pct,
                reqitm_qty,
                tax_amount,
                vat_amount,
                totitm_amt,
                warnty_dur,
                wtydur_type,
                wrnty_info
            }
        });
    }

    updatePurchase(@Param('id') id: number, @Body() updateDto: UpdatePurchaseItemDto) {
        const { 
            proditm_id,
            proditm_nm,
            purch_yymm,
            purinfo_id,
            puritem_qty,
            unit_price,
            taxamt_pct,
            vatamt_pct,
            reqitm_qty,
            tax_amount,
            vat_amount,
            totitm_amt,
            warnty_dur,
            wtydur_type,
            wrnty_info,
            active_status    
        
        } =updateDto;
        return this.prisma.bO_PUR_ITEM.update({
            where: {
                puritem_id: Number(id)
            },
            data: {
                proditm_id,
                proditm_nm,
                purch_yymm,
                purinfo_id,
                puritem_qty,
                unit_price,
                taxamt_pct,
                vatamt_pct,
                reqitm_qty,
                tax_amount,
                vat_amount,
                totitm_amt,
                warnty_dur,
                wtydur_type,
                wrnty_info,
                active_status
            }
        })
    }
}
