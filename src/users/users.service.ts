import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly userRepo:Repository<Users>) {}
      async findAuthUser(username: string, password:string): Promise<Users[]> {
        return await this.userRepo.find({
            select: ['username', 'password', 'role'],
            where: [{ 'username': username,'password':password }]
        });
      }
}
