import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';
import { Recoverable } from 'node:repl';
import { query } from 'express';
import { Observable } from 'rxjs';

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

  // @Get()
  // index(@Query('email') email: string): Promise<Observable<User>>); {
  //   return this.service.findByMail({ email });
  // }
}
