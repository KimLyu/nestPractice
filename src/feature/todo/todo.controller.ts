import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
  @UsePipes(
    new ValidationPipe({
      // disableErrorMessages: true, //不顯示錯誤訊息
      whitelist: true, //非定義參數 不記錄近來
      forbidNonWhitelisted: true //無效參數 報錯
    })
  )
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
