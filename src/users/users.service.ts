import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findAllAlphabeticalorder(): Promise<User[]> {
    return await this.usersRepository.find({
      order: { fullName: 'ASC' },
    });
  }

  async findOrderByMostpopular(): Promise<User[]> {
    return await this.usersRepository.find({
      order: { points: 'DESC' },
    });
  }

  async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['fullName', 'birthday', 'isActive'],
      where: [{ id: _id }],
    });
  }

  async getUserByFullName(_fullName: string): Promise<User[]> {
    console.log(_fullName);
    return await this.usersRepository.find({
      select: ['fullName'],
      where: [{ fullName: _fullName === _fullName }],
    });
  }

  async createUser(user: User) {
    this.usersRepository.save(user);
    return user.fullName;
  }

  async update(user: User) {
    this.usersRepository.update(user.id, user);
    return `Updated user id: ${user.id} new name: ${user.fullName} `;
  }

  async deleteUser(user: User) {
    this.usersRepository.delete(user);
    return `---User deleted---`;
  }
}
