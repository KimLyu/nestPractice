// import { Injectable } from '@nestjs/common';
import { IsString } from 'class-validator';

// @Injectable()
export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
