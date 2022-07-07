import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  //這張表單 不需要顯示這個資料
  @ManyToMany((type) => Coffee, (coffee) => coffee.flavors) //只建立表單關係。
  coffees: Coffee[];
}
