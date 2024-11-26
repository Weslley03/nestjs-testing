import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  create(user: { id: number; email: string }) {
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  remove(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    return { deleted: true };
  }
}
