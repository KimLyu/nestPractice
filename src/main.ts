import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middlewares/logger.middleware';
import { HelloWorldInterceptor } from './interceptors/hello-world.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //過濾無效參數
      forbidNonWhitelisted: true, //收到無效參數回傳錯誤
    }),
  );
  app.use(logger);
  app.useGlobalInterceptors(new HelloWorldInterceptor());
  await app.listen(3000);
}
bootstrap();
