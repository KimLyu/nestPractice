import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  providers: [CoffeesService],
  controllers: [CoffeesController],
})
export class CoffeesModule {}
