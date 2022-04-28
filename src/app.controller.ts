import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('MESSAGE_BOX') private readonly messageBox //注入messageBox 
  ) {
    console.log(this.messageBox); //創建時 印出資訊
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
