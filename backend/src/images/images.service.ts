import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.module';
import { createImageDto } from './dto/create-image.dto';
import { v4 as uuid } from 'uuid';
import { title } from 'process';

@Injectable()
export class ImagesService {
    constructor(
        @InjectRepository(Image)
        private imageRepository: Repository<Image>,
    ) {}

    async getAllImages(): Promise<Image[]> {
        return this.imageRepository.find();
    }

    // async updateImage(id: number, updateImageDto: createImageDto): Promise<Image> {
    //     const image = await this.imageRepository.findOne();
    //     if (!image) {
    //         throw new NotFoundException(`Image with ID ${id} not found.`);
    //     }

        
    //     image.title = updateImageDto.title;
    //     image.description = updateImageDto.description;

    
    //     await this.imageRepository.save(image);

    //     return image;
    // }
    

    async createImage(createImageDto: createImageDto): Promise<Image> {
        const { title, description } = createImageDto;
        const newImage: Image = {
            id: uuid(),
            title,
            description,
            createdAt: new Date(),
        };

        return this.imageRepository.save(newImage);
    }

    async deleteImageById(id: string): Promise<void> {
        const result = await this.imageRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Image with ID ${id} not found.`);
        }
    }
}
