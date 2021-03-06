import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AssignmentModule } from './assignment/assignment.module';
import { DBModule } from './db/db.module';

@Module({
  imports: [DBModule, UsersModule, AssignmentModule],
})
export class AppModule {}
