import { Controller, Get, Put,Logger,Body,Post,Delete, Param,UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employees } from './employee.entity';
import { EmplyoeeDto } from './employeeDto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('employee')
export class EmployeeController {
    constructor(private emplyeeService:EmployeeService){}
    @UseGuards(JwtAuthGuard)
    @Get()
    async findALlEmp(): Promise<Employees[]> {
        return this.emplyeeService.getEmployeeList();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body('body') body: any): Promise<Employees[]> {
        //Logger.log('contactData'+ body.EMPLOYEE_ID +'***********');
      return this.emplyeeService.create(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async update(@Body('id') id,@Body('body') body: Employees):Promise<Employees[]> {
        return this.emplyeeService.updateListEmp(id, body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async removeEmployee(@Param('id') id):Promise<Employees[]>{
        return this.emplyeeService.destroy(id);
    }
}
