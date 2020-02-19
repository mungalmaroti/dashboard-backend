import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employees } from './employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employees])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
