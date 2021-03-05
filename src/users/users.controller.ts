import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get('all')
  findAll(): Promise<User[]> {
    return this.service.getUsers();
  }

  @Get('alphabeticalorder')
  findAllAlphabeticalorder(): Promise<User[]> {
    return this.service.findAllAlphabeticalorder();
  }

  @Get('mostpopular')
  findOrderByMostpopular(): Promise<User[]> {
    return this.service.findOrderByMostpopular();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  // @Get(':fullName')
  // getUserByFirstName(@Param() params) {
  //   return this.service.getUserByFirstName(params.fullName);
  // }

  @Get('findByFilter')
  async findByFilter(@Query() firstName): Promise<User[]> {
    return this.service.getUserByFirstName(firstName);
  }

  @Post('create')
  create(@Body() user: CreateUserDto) {
    return this.service.createUser(user);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() user: User): Promise<any> {
    user.id = Number(id);
    console.log('Update #' + user.id);
    return this.service.update(user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }
}
