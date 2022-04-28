import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    @Optional() @Inject('HANDSOME_MAN') private readonly handsome_man = { name: 'defaultKim' }
    //使用Inject 將自定義的 HANDSOME_MAN 注入，若沒有ˊ注入，則使用預設值
  ) {
    console.log(handsome_man); //將注入資訊印到console
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
