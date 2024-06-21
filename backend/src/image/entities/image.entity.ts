import { IsBoolean, IsString, IsUrl, Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('web_images')
@Unique(['image_name'])
export class Image {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  @IsString()
  @Length(1, 100)
  image_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @IsString()
  @Length(0, 255)
  image_description: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @IsString()
  @IsUrl()
  @Length(1, 255)
  image_link: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at'})
  updated_at: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: Date;

  @Column({ type: 'bool'})
  @IsBoolean()
  grayscale: boolean;
}
