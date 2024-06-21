import { link } from "fs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('web_images', {schema: 'test_db'})
export class Picture {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    id: number;

    @Column('varchar', { name: 'image_name', length: 100 })
    imageName: string;

    @Column('varchar', { name: 'image_description', length: 255 })
    imageDescription: string;

    @Column('varchar', { name: 'image_link', length: 255 })
    imageLink: string;
}
