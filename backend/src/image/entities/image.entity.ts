import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('web_images')
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  link: string;

  @Column({ default: false })
  grayscale: boolean;
}
