import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() //sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() //自動產生 裝飾符
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable() //在這張表 需要顯示這個資料
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees) //表單關係
  flavors: string[];
}
