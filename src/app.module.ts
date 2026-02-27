import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuantModule } from './quant/quant.module';

@Module({
  imports: [QuantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
