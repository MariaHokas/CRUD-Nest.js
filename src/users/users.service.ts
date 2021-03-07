import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto>  {
    return await this.usersRepository.save(createUserDto);
  }

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

  async findByFirstName(user: User): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['firstName', 'birthday', 'isActive'],
      where: { firstName: user.firstName },
    });
  }

  async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['firstName', 'birthday', 'isActive'],
      where: [{ id: _id }],
    });
  }

  async update(user: User) {
    this.usersRepository.update(user.id, user);
    return `Updated user id: ${user.id} new name: ${user.firstName} `;
  }

  async deleteUser(user: User) {
    this.usersRepository.delete(user);
    return `---User deleted---`;
  }

  async findByMail(email: string): Promise<Observable<User>> {
    return from(this.usersRepository.findOne({ email }));
  }
}
