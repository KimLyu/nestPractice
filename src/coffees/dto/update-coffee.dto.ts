// import { Injectable } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { CreateCoffeeDto } from './create-coffee.dto';

// @Injectable()
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) { }