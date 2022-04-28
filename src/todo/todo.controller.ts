import { Controller, Post, Body, Get, Param, HttpCode, HttpStatus, Header } from '@nestjs/common';
import { CreateTodoDto } from "./DTO/create-todo.dto"
@Controller('todos')
export class TodoController {
  // @Get(':id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // get(@Param('id') id: string) {
  //   return {
  //     id,
  //     title: `Title ${id}`,
  //     description: ''
  //   };
  // }

  @Post()
  create(@Body() dto: CreateTodoDto) {
    const id = 1;
    return { id, ...dto };
  }

  @Get()
  @Header('X-Hao-headers', '1')
  getAll() {
    return {
      id: 1,
      title: 'Title 1',
      description: 'header test'
    };
  }
}
