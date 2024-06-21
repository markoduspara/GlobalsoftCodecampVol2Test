import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('image', { schema: 'test_db' })
export class Image {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    id: number;

    @Column('varchar', { name: 'title', length: 64 })
    title: string;

    @Column('varchar', { name: 'description', length: 64 })
    description: string;
}
