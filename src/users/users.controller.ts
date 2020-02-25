import { Controller, Get, Request, Post, UseGuards,Logger,Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';

@Controller('api')
export class UsersController {
    
    constructor(private usersService: UsersService){}

    // @UseGuards(LocalAuthGuard)
    // @Post('auth/login')
    // async login(@Request() req) {
    //   return this.authService.login(req.user);
    // }

    @Get('users')
    async findAll(@Query() login): Promise<Users[]> {
        //Logger.log('*********'+login.username+'********')
        return this.usersService.findAuthUser(login.username,login.password);
    }
}
