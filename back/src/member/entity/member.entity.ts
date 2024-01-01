import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  tel: string;

  @Column()
  point: number;

  
}