import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
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
      order: { firstName: 'ASC' },
    });
  }

  async findOrderByMostpopular(): Promise<User[]> {
    return await this.usersRepository.find({
      order: { points: 'DESC' },
    });
  }

  async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['firstName', 'birthday', 'isActive'],
      where: [{ id: _id }],
    });
  }

  async getUserByFirstName(firstName: string): Promise<User[]> {
    console.log(firstName);
    return await this.usersRepository.find({
      select: ['firstName'],
      where: [{ firstName: firstName }],
    });
  }

  async createUser(user: CreateUserDto) {
    this.usersRepository.save(user);
    return user.firstName;
  }

  async update(user: User) {
    this.usersRepository.update(user.id, user);
    return `Updated user id: ${user.id} new name: ${user.firstName} `;
  }

  async deleteUser(user: User) {
    this.usersRepository.delete(user);
    return `---User deleted---`;
  }
}
