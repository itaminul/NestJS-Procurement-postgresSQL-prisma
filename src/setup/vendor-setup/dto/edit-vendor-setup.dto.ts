import { Injectable } from "@nestjs/common"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

@Injectable()
export class VendorEditDto {
  @IsString()
  @IsNotEmpty()
  readonly vendorName: string;
  @IsString()
  @IsOptional()
  vendoerDescription: string;
  @IsNumber()
  @IsNotEmpty()
  vendorType: number;
  @IsNumber()
  @IsNotEmpty()
  vendorCountryType: number;
  @IsNumber()
  @IsNotEmpty()
  vendorCountry: number;
  @IsString()
  @IsOptional()
  vendorOfficeName: string;
  @IsString()
  @IsOptional()
  vendorOfficeLocation: string;
  @IsString()
  @IsOptional()
  vendoerPhone: string;
  @IsNumber()
  @IsNotEmpty()
  orgId: number;
}