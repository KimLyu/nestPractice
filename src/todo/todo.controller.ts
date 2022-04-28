import { Controller, Post, Body, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  get(@Param('id') id: string) {
    return {
      id,
      title: `Title ${id}`,
      description: ''
    };
  }

  @Post()
  create(
    @Body('title') title: string,
    @Body('description') description?: string
  ) {
    const id = 1;
    return { id, title, description };
  }
}
