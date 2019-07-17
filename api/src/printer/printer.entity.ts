import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Printer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ipAddress: string;

  @Column()
  isActive: boolean;
}