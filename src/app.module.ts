import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true, //自動加載
      synchronize: true, //使資料庫自動同步 生產模式需禁用!?
    })
  ],
  controllers: [
    AppController,

  ],
  providers: [
    AppService
  ]
})
export class AppModule {
}