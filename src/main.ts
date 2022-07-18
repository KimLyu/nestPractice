import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //過濾無效參數
      transform: true,
      forbidNonWhitelisted: true, //收到無效參數回傳錯誤
      transformOptions: {
        enableImplicitConversion: true, //不再需要Type裝飾符
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
