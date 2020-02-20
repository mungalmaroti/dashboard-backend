import { Controller, Get, Req , Body, Logger, Param,Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('api')
export class UsersController {
    
    constructor(private usersService: UsersService){}

    @Get('users')
    async findAll(@Query() login): Promise<Users[]> {
        //Logger.log('*********'+login.username+'********')
        return this.usersService.findAuthUser(login.username,login.password);
    }
}
