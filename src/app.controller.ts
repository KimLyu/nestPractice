import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) { //轉換時 插入ParseIntPipe
    return this.appService.getUser(id);
  }
}
