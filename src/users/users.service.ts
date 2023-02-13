import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { User } from './user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.userRepository.findeOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find({});
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.create({ userId: randomUUID(), ...user });
  }

  async updateUser(userId: string, user: User): Promise<User> {
    return this.userRepository.update({ userId }, { ...user });
  }
}
