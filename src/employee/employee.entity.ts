import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employees')
export class Employees {
  @PrimaryGeneratedColumn() EMPLOYEE_ID: number;

  @Column('varchar') FIRST_NAME: string;

  @Column('varchar') LAST_NAME: string;

  @Column('varchar') EMAIL: string;

  @Column('varchar') PHONE_NUMBER: string;

  @Column('varchar') HIRE_DATE: string;

  @Column('varchar') JOB_ID: string;

  @Column('varchar') SALARY: string;

  @Column('varchar') COMMISSION_PCT: string;

  @Column('varchar') MANAGER_ID: string;

  @Column('varchar') DEPARTMENT_ID: string;

}