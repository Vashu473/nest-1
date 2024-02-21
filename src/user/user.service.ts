import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

interface createUserDto {
  name: string;
}

@Injectable()
export class UserService {
  public userData = {};

  private getUser(): object {
    return this.userData;
  }

  createUser(body: createUserDto): string {
    this.userData[body.name] = body;
    return 'User created';
  }
}
