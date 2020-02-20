import { Injectable,Logger } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm'
import { Employees } from './employee.entity';


@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employees) private employee:Repository<Employees>){}
    async getEmployeeList(): Promise<Employees[]>{
        return await this.employee.find();
    }
    async updateListEmp(EMPLOYEE_ID:number,body:Employees): Promise<Employees[]>{
        //Logger.log('***********'+id+'*********');
        await this.employee.update({ EMPLOYEE_ID },body);
        return await this.employee.find();
    }
    async create(getEditDetail:Employees): Promise<Employees[]>{
        const add = await this.employee.create(getEditDetail);
        await this.employee.save(add);
        return this.employee.find();
    }
    async destroy(EMPLOYEE_ID:number){
        await this.employee.delete({EMPLOYEE_ID});
        return await this.employee.find();
    }
}
