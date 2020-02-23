import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm'
export type User = any;
@Injectable()
export class UsersService {
  private readonly users: User[];
    constructor(@InjectRepository(Users) private readonly userRepo:Repository<Users>) {
      this.users = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'chris',
          password: 'secret',
        },
        {
          userId: 3,
          username: 'maria',
          password: 'guess',
        },
      ];
    }
      async findAuthUser(username: string, password:string): Promise<Users[]> {
        return await this.userRepo.find({
          select: ['username', 'password', 'role'],
          where: [{ 'username': username,'password':password }]
      });
      }

      async findOne(username: string): Promise<Users | undefined> {
        return this.users.find(user => user.username === username);
      }
}
