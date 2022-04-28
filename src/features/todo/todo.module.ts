import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

class HandSomeMan {
  name = 'HAO';
}

class TestHandSomeMan {
  name = 'Kim';
}


@Module({
  controllers: [TodoController],
  providers: [
    { //展開式用法
      provide: TodoService,
      useClass: process.env.NODE_ENV === 'production' ? HandSomeMan : TestHandSomeMan
      // 上述是根據環境參數不同 切換class的使用方式
      // 如 useClass:{ name: 'HAO' }
      // 或是 useClass:'HAO'
      // 可以使用的有class、Object、string、symbol、enum
    }
  ],
  exports: [TodoService],
})
export class TodoModule {}
