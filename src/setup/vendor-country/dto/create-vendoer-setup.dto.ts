import { Injectable } from "@nestjs/common"
import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

@Injectable()
export class VendoerCreateDto {
  @IsString({ message: 'Vendor should not be empty' })
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
  vendoerCountryType: number;
  @IsNumber()
  @IsNotEmpty()
  vendoerCountry: number;
  @IsString()
  @IsOptional()
  vendoerOfficeName: string;
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