import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../guards/auth.guard';

@Controller('todos')
  @UseGuards(AuthGuard)
export class TodoController {
  @Get()
  getAll() {
    return [];
  }
}