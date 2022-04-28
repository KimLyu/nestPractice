import { Controller, Get, Param } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get(':id')
  get(@Param('id') id: string) {
    return {
      id,
      title: `Title ${id}`,
      description: ''
    };
  }
}
