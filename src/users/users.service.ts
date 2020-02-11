import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsersService {
    private readonly users: any[];
    constructor(@InjectRepository(Users) private readonly userRepo:Repository<Users>) {
        this.users = [{
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
      }
      async findAuthUser(username: string, password:string): Promise<Users[]> {
        //return this.users.find(user => user.username === username && user.password === password );
        return await this.userRepo.find();
      }
}
