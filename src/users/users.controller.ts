import { Controller, Get, Req , Body } from '@nestjs/common';
import { Request } from 'express';

@Controller('/users')
export class UsersController {
    @Get()
    findAll(@Req() request: Request): any {
        const loginUser = [{
            username:'mung01',
            password:'mung@123',
            role:'admin'
        },{
            username:'maroti',
            password:'maroti@123',
            role:'user'
        },{
            username:'sudhir',
            password:'sudhir@123',
            role:'sales'
        }]
        return loginUser;
      }
}
