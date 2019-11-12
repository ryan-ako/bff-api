import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PropertyModule } from "./property/property.module";
import { AriModule } from "./ari/ari.module";
import { BotResponseModule } from "./bot-response/bot-response.module";

@Module({
  imports: [PropertyModule, AriModule, BotResponseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
