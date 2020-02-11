import { Controller, Get, Req , Body, Logger, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

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
    
    constructor(private usersService: UsersService){}

    @Get('users/:username/:password')
    async findAll(@Param('username') username, @Param('password') password): Promise<Users[]> {
        return this.usersService.findAuthUser(username,password);
    }
}
