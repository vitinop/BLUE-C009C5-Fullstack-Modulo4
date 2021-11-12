import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SomaModule } from './soma/soma.module';

@Module({
  imports: [SomaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
