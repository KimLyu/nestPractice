import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './features/todo/todo.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      { path: '/todos', method: RequestMethod.POST },// POST /todos 會生效
      { path: '/', method: RequestMethod.GET }// GET / 會生效
    )
  }
}