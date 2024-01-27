import { Module } from '@nestjs/common';
import { VendoerSetupService } from './vendoer-setup.service';

@Module({
  providers: [VendoerSetupService]
})
export class VendoerSetupModule {}
