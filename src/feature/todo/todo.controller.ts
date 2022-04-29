import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
@UsePipes(new ValidationPipe({ disableErrorMessages: true })) // 也可放在class層級 使整個Class都支持驗證
export class TodoController {

  @Post()
  // @UsePipes(ValidationPipe) //需要裝飾符 引入pipe
  create(@Body() dto: CreateTodoDto) {
    return {
      id: 1,
      ...dto
    };
  }

}
