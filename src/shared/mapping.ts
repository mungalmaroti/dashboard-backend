import { Users } from '../users/users.entity';
import { UserDto } from '../users/users.dto';

export const toUserDto =(data:Users) : UserDto =>{
    const { id, username, password, role } = data;
    let UserDto : UserDto =  { id, username, password, role };
    return UserDto;
}