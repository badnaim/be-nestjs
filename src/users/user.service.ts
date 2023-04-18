import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [{ name: 'bat', age: 10 }];
  getAllUsers() {
    return this.users;
  }
  addUser(user: { name: string; age: number }) {
    this.users.push(user);
    console.log(this.users);
    return 'success';
  }
  getUser(name: string) {
    return this.users.filter((user) => user.name == name);
  }
}
