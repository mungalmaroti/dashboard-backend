import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//const logger = require('./config/logger');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
