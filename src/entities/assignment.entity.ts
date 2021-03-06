import { validateOrReject } from 'class-validator';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  @Generated('increment')
  assignment_number: number;

  @Column({ length: 250 })
  subject: string;

  @Column({type: 'text', nullable: true })
  description?: string;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: "assignment_owner_id" })
user: User[];

  @BeforeInsert()
  @BeforeUpdate()
  async check() {
      try {
          await validateOrReject(this, { skipMissingProperties: true });
      }
      catch (error) {
          throw new Error('validation on user not passed: ' + JSON.stringify(error));
      }
  }
}


