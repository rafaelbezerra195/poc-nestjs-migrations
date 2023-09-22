import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
