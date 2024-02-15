import { Module } from '@nestjs/common';
import { ItemSetupService } from './item-setup.service';
import { ItemSetupController } from './item-setup.controller';

@Module({
  providers: [ItemSetupService],
  controllers: [ItemSetupController]
})
export class ItemSetupModule {}
