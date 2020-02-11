import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn() id: number;

  @Column('varchar') username: string;

  @Column('varchar') password: string;

  @Column('varchar') role: string;

}