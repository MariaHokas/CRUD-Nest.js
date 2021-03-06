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
import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}
  
  @Post()
  create(@Body() user: CreateUserDto) {
    return this.service.createUser(user);
  }

  @Get()
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
