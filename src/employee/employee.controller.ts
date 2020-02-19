import { Controller, Res, Get,HttpStatus, Put,Logger,Param,Body,Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employees } from './employee.entity';

@Controller('employee')
export class EmployeeController {
    constructor(private emplyeeService:EmployeeService){}
    @Get('getList')
    async findALlEmp(): Promise<Employees[]> {
        return this.emplyeeService.getEmployeeList();
    }
    @Post('create')
    async create(@Body() contactData: Employees): Promise<any> {
      return this.emplyeeService.create(contactData);
    }
    @Put('updateList:/getEditDetail')
    async updateEployee(@Param('getEditDetail') getEdit): Promise<Employees[]>{
        Logger.log('**********************************************');
        Logger.log('Only a test',getEdit);
        return this.emplyeeService.updateListEmp(getEdit);
    }
}
