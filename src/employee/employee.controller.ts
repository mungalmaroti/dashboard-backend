import { Controller, Get, Put,Logger,Body,Post,Delete, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employees } from './employee.entity';
import { EmplyoeeDto } from './employeeDto';

@Controller('employee')
export class EmployeeController {
    constructor(private emplyeeService:EmployeeService){}
    @Get()
    async findALlEmp(): Promise<Employees[]> {
        return this.emplyeeService.getEmployeeList();
    }

    @Post()
    async create(@Body('body') body: any): Promise<Employees[]> {
        //Logger.log('contactData'+ body.EMPLOYEE_ID +'***********');
      return this.emplyeeService.create(body);
    }

    @Put()
    async update(@Body('id') id,@Body('body') body: Employees):Promise<Employees[]> {
        return this.emplyeeService.updateListEmp(id, body);
    }

    @Delete(':id')
    async removeEmployee(@Param('id') id):Promise<Employees[]>{
        return this.emplyeeService.destroy(id);
    }
}
