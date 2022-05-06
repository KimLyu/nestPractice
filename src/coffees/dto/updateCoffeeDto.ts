import { Injectable } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { CreateCoffeeDto } from './createCoffeeDto';

@Injectable()
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) { }