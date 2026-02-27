import { Module } from '@nestjs/common';
import { QuantController } from './quant.controller';
import { QuantService } from './quant.service';

@Module({
  controllers: [QuantController],
  providers: [QuantService],
})
export class QuantModule {}
