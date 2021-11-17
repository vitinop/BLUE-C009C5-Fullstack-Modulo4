import { Module } from '@nestjs/common';
import { SomaController } from './soma.controller';
import { SomaService } from './soma.service';

@Module({
  controllers: [SomaController],
  providers: [SomaService]
})
export class SomaModule {}
