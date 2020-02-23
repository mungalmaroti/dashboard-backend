import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    id: number;
  
    @IsNotEmpty()
    username: string;
  
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    role: string;
}