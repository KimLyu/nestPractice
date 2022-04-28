import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { HandsomeModule } from './handsome/handsome.module';

@Module({
  // imports: [HandsomeModule], // 模擬 未正確注入的module
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }