import { PartialType } from '@nestjs/mapped-types'; //swagger會錯
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
