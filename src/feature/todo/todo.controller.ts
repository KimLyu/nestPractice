import { Controller, Get, ParseArrayPipe, Query } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get()
  get(

    //將idd用','分開後，內容是Number型態，並存入array中。
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[]
  ) {
    return ids;
  }
}