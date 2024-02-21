import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';

interface createUserDto {
  name: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getUser(): object {
    return this.userService.userData;
  }

  @Post('/createUser')
  createUser(@Body() body: createUserDto): string {
    return this.userService.createUser(body);
  }
}
