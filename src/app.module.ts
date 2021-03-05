import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentModule } from './assignment/assignment.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AssignmentModule],
})
export class AppModule {}
