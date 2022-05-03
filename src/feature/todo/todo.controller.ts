import { Body, Controller, ParseArrayPipe, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {

  @Post()
  create(
    @Body(new ParseArrayPipe({ items: CreateTodoDto }))//Array的內容對應到DTO
    dtos: CreateTodoDto[]
  ) {
    return dtos;
  }

}