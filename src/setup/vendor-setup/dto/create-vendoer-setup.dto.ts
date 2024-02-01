import { Injectable } from "@nestjs/common"
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator"

@Injectable()
export class VendoerCreateDto {
    @IsString({ message: 'Vendor should not be empty'})
    @IsNotEmpty()
    readonly vendorName: string;
    @IsString()
    @IsEmpty()
    vendoerDescription:  string;
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
    @IsEmpty()
    vendoerOfficeName: string;
    @IsString()
    @IsEmpty()
    vendorOfficeLocation: string;
    @IsString()
    @IsEmpty()
    vendoerPhone: string;
    @IsNumber()
    @IsNotEmpty()
    orgId: number;
}