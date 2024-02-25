import { Injectable } from "@nestjs/common";
import { IsDateString, IsEmpty, IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

@Injectable()
export class CreateItemDto {
  @IsOptional()
  @IsString()
  udId: string
  @IsOptional()
  @IsString()
  itemCode: string
  @IsOptional()
  @IsString()
  modelNo: string
  @IsOptional()
  @IsNumber()
  itemGroupId: number
  @IsOptional()
  @IsString()
  itemName: string
  @IsOptional()
  @IsString()
  itemDescription: string
  @IsOptional()
  @IsNumber()
  measurementtId: number
  @IsOptional()
  @IsNumber()
  costPrice: number
  @IsOptional()
  @IsNumber()
  salePrice: number
  @IsOptional()
  @IsDateString()
  manufactureDate: string
  @IsOptional()
  @IsDateString()
  expireDate: string
  @IsOptional()
  @IsString()
  taxRate: number
  @IsOptional()
  @IsNumber()
  reorderLabel: number
  @IsOptional()
  @IsNumber()
  supplierId: number
  @IsOptional()
  @IsString()
  itemImage: string
  @IsOptional()
  @IsString()
  remarks: string
  @IsOptional()
  @IsNumber()
  orgId: number
}