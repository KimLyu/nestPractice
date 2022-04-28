import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

class MessageBox {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'MESSAGE_BOX',
      useFactory: (appService: AppService) => {
        const message = appService.getHello();
        return new MessageBox(message);
      },
      inject: [AppService]
    }
  ],
})
export class AppModule { }