import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloWorldInterceptor } from './interceptors/hello-world.interceptor';

@Controller()
  // @UseInterceptors(HelloWorldInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}