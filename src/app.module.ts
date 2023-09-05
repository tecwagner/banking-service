import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './config/config.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { HttpModule } from '@infra/http.module';
import { DataBaseModule } from '@infra/database/prisma/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ConfigurationModule,
    HttpModule,
    DataBaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
