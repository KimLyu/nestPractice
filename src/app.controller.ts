import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    @Inject('HANDSOME_MAN') private readonly handsome_man: string
    //使用Inject 將自定義的 HANDSOME_MAN 注入，
  ) {
    console.log(handsome_man); //將注入資訊印到console
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
