import { Users } from '../users/users.entity';
import { UserDto } from '../users/users.dto';
import { EmplyoeeDto } from '../employee/employeeDto';
import { Employees } from '../employee/employee.entity';

export const toUserDto = (data:Users) : UserDto =>{
    const { id, username, password, role, status } = data;
    let UserDto : UserDto =  { id, username, password, role, status };
    return UserDto;
}

// export const toEmployeeDto = (data:Employees) : EmplyoeeDto =>{
//     const { EMPLOYEE_ID,FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,HIRE_DATE,JOB_ID,SALARY,COMMISSION_PCT,MANAGER_ID,DEPARTMENT_ID} = data;
//     let EmplyoeeDto : EmplyoeeDto = {empId, firstName,lastName, email, mobileNo, doj,salary,pct,managerId,deptId}; 
//     return EmplyoeeDto;
// }