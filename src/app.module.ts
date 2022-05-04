import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './features/todo/todo.controller';
import { TodoModule } from './features/todo/todo.module';
import { HelloWorldMiddleware } from './middlewares/hello-world.middleware';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule { }