import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { error } from 'console';
import { PrismaClientExceptionFilter } from './exception/prisma-client-exception.filter';
import { TransformInterceptor } from './exception/transform-nterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const APP_PORT = process.env.APP_PORT || 8082;
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
    const { httpAdapter } = app.get(HttpAdapterHost);
    app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter))
    app.enableCors();
    app.setGlobalPrefix('api');

  await app.listen(APP_PORT, () => {
    console.info(`Server is listening on port ${APP_PORT}`);
  });
}
bootstrap();
