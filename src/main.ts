import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const APP_PORT = process.env.APP_PORT || 8081;
  await app.listen(APP_PORT, () => {
    console.info(`Server is listening on port ${APP_PORT}`);
  });
}
bootstrap();
