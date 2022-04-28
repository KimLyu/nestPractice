import { Controller, Get } from '@nestjs/common';
import { of } from 'rxjs';

@Controller('todos')
export class TodoController {
  @Get()
  getAll() {
    return of([]);
  }
}
