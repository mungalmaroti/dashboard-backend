import { Controller, Get, Req , Body, Logger, Param } from '@nestjs/common';
import { Request } from 'express';
const {transports, createLogger, format} = require('winston');

const logger = createLogger({
    transports : [
        new transports.Console({
            level:'info'
        })
    ]
});

@Controller('api')
export class UsersController {
    @Get('users/:uname/username/:pwd/password')
    //findAll(@Req() request: Request): any {
    findAll(@Param('uname') username: string, @Param('pwd') password: string): any { 
        logger.log('Only a test');
        let user = {uname: username,pwd:password} 
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
        return user;
      }
}
