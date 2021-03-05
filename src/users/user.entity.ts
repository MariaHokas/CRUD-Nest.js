import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  fullName: string;

  @Column('date')
  birthday: Date;

  @Column()
  isActive: boolean;

  @Column()
  points: number;
}

export class UserEntity {}
