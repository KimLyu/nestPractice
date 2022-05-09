import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() //sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()//自動產生 裝飾符
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}