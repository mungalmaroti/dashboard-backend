import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private readonly userRepo:Repository<Users>) { }
      async findAuthUser(username: string, password:string): Promise<Users[]> {
        return await this.userRepo.find({
          select: ['username', 'password', 'role','status'],
          where: [{ 'username': username,'password':password }]
      });
      }

      // async findOne(username: string): Promise<Users | undefined> {
      //   return this.users.find(user => user.username === username);
      // }
      async findOne(username: string, password:string): Promise<Users[] | undefined> {
        return await this.userRepo.find({
          select: ['username', 'password','role','status'],
          where: [{ 'username': username,'password':password }]
        });
      }
}
