import { Injectable } from "@nestjs/common"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

@Injectable()
export class VendorCountryEditDto {
  @IsString({ message: 'Country Name should not be empty' })
  @IsNotEmpty()
  countryName: string;
  @IsNumber()
  @IsNotEmpty()
  orgId: number;
}