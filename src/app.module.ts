import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { PropertyModule } from './property/property.module';
import { AriModule } from './ari/ari.module';
import { BotResponseModule } from './bot-response/bot-response.module';

@Module({
  imports: [ConfigModule, PropertyModule, AriModule, BotResponseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/none');
  }
}
