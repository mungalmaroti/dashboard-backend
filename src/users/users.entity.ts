import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('photo')
export class Users {
  @PrimaryGeneratedColumn() user_id: number;

  @Column('varchar') user_name: string;

  @Column('varchar') PASSWORD: string;

  @Column('varchar') ROLE: string;

}