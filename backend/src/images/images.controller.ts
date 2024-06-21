import { Controller, Get, Post, Delete, Body, Param, Put, NotFoundException } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Image } from './image.module';
import { createImageDto } from './dto/create-image.dto';

@Controller('images')
export class ImagesController {
    constructor(private imagesService: ImagesService) {}

    @Get()
    async getAllImages(): Promise<Image[]> {
        return await this.imagesService.getAllImages();
    }

    // @Put(':id')
    // async updateImage(@Param('id') id: string, @Body() updateImageDto: createImageDto): Promise<Image> {
    //     const updatedImage = await this.imagesService.updateImage(parseInt(id, 10), updateImageDto);
    //     if (!updatedImage) {
    //         throw new NotFoundException(`Image with ID ${id} not found.`);
    //     }
    //     return updatedImage;
    // }

    @Post()
    async createImage(@Body() createImageDto: createImageDto): Promise<Image> {
        return await this.imagesService.createImage(createImageDto);
    }

    @Delete('/:id')
    async deleteImageById(@Param('id') id: string): Promise<void> {
        await this.imagesService.deleteImageById(id);
    }
}
