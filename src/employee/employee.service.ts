import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm'
import { Employees } from './employee.entity';


@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employees) private employee:Repository<Employees>){}
    async getEmployeeList(): Promise<Employees[]>{
        return await this.employee.find({
            select: ['EMPLOYEE_ID', 'FIRST_NAME', 'LAST_NAME','EMAIL','PHONE_NUMBER','HIRE_DATE','JOB_ID','SALARY','COMMISSION_PCT','MANAGER_ID','DEPARTMENT_ID']
        });
    }
    async updateListEmp(getEditDetail): Promise<Employees[]>{
        //return await this.employee.update({})
        return await this.employee.find({
            select: ['EMPLOYEE_ID', 'FIRST_NAME', 'LAST_NAME','EMAIL','PHONE_NUMBER','HIRE_DATE','JOB_ID','SALARY','COMMISSION_PCT','MANAGER_ID','DEPARTMENT_ID']
        });
    }
    async create(getEditDetail): Promise<Employees[]>{
        //return await this.employee.update({})
        return null;
    }
}
