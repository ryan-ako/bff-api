import { Module } from '@nestjs/common';
import { BotResponseService } from './bot-response.service';
import { BotResponseController } from './bot-response.controller';

@Module({
  providers: [BotResponseService],
  controllers: [BotResponseController]
})
export class BotResponseModule {}
