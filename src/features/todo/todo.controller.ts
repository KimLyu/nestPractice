import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service'; //需要import

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService //在constructor內 加入service
  ) { }

  @Get()
  getAll() {
    return this.todoService.getTodos();
  }
}
