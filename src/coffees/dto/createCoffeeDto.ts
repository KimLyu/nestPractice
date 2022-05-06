import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateCoffeeDto {
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}