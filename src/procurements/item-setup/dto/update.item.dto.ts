import { Injectable } from '@nestjs/common';
import {
  IsDateString,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

@Injectable()
export class UpdateItemDto {
  @IsEmpty()
  @IsString()
  udId: string;
  @IsEmpty()
  @IsString()
  itemCode: string;
  @IsEmpty()
  @IsString()
  modelNo: string;
  @IsNotEmpty()
  @IsNumber()
  itemGroupId: number;
  @IsNotEmpty()
  @IsString()
  itemName: string;
  @IsEmpty()
  @IsString()
  itemDescription: string;
  @IsNotEmpty()
  @IsNumber()
  measurementtId: number;
  @IsEmpty()
  @IsNumber()
  costPrice: number;
  @IsEmpty()
  @IsNumber()
  salePrice: number;
  @IsEmpty()
  @IsDateString()
  manufactureDate: string;
  @IsEmpty()
  @IsDateString()
  expireDate: string;
  @IsEmpty()
  @IsString()
  taxRate: number;
  @IsEmpty()
  @IsNumber()
  reorderLabel: number;
  @IsEmpty()
  @IsNumber()
  supplierId: number;
  @IsEmpty()
  @IsString()
  itemImage: string;
  @IsEmpty()
  @IsString()
  remarks: string;
  @IsNotEmpty()
  @IsNumber()
  orgId: number;
}
