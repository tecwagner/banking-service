import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigurationService } from './config/config.service';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = app.get(ConfigurationService);

  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(config.apiPort);
  Logger.log(`Running application on port : ${config.apiPort}`);
}
bootstrap();
