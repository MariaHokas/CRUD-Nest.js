import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

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

  @Get(':fullName')
  getUserByFullName(@Param() params) {
    return this.service.getUserByFullName(params.fullName);
  }

  @Post('create')
  create(@Body() user: User) {
    return this.service.createUser(user);
  }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() user: User) {
  //   return this.service.updateUser(+id, user);
  // }

  @Put(':id/update')
  async update(@Param('id') id, @Body() user: User): Promise<any> {
      user.id = Number(id);
      console.log('Update #' + user.id)
      return this.service.update(user);
  }  

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }
}
