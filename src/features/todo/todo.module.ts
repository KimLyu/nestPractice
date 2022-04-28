import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [
    { //展開式用法
      provide: TodoService,
      useClass: TodoService //指定使用的class物件
      // 如 useClass:{ name: 'HAO' }
      // 或是 useClass:'HAO'
      // 可以使用的有class、Object、string、symbol、enum
    }
  ],
  exports: [TodoService],
})
export class TodoModule {}
