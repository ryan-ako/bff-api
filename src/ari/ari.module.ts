import { Module } from '@nestjs/common';
import { AriService } from './ari.service';
import { AriController } from './ari.controller';

@Module({
  providers: [AriService],
  controllers: [AriController]
})
export class AriModule {}
