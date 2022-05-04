import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './features/todo/todo.controller';
import { TodoModule } from './features/todo/todo.module';
import { HelloWorldMiddleware } from './middlewares/hello-world.middleware';
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
    //在controller 指定使用兩個中間件
    consumer.apply(LoggerMiddleware, HelloWorldMiddleware).forRoutes(TodoController) 
  }
}