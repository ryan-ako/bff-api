import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PropertyModule } from "./property/property.module";
import { AriModule } from "./ari/ari.module";

@Module({
  imports: [PropertyModule, AriModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
