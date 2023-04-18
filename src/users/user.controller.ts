import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('all')
  allUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':name')
  getUser(@Param('name') name: string) {
    console.log('id: ', name);
    return this.userService.getUser(name);
  }
  @Post('add')
  addUsers(@Body() body: any) {
    console.log('add users: ', body);
    return this.userService.addUser(body);
  }
}
