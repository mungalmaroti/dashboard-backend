import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Users } from '../users/users.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
      ) {}

    async validateUser(username: string, pass: string): Promise<Users[]> {
      const user = await this.usersService.findOne(username, pass);
      if (user && user[0].password === pass) {
        return user;
      }
      return null;
    }  

    async login(user: any) {
        const payload = { username: user.username, password: user.password };
        const getUser = await this.usersService.findAuthUser(user.username, user.password);
        return {
          access_token: this.jwtService.sign(payload),
          user:getUser[0].username,
          role:getUser[0].role,
          status:getUser[0].status
        };
    }  
}
