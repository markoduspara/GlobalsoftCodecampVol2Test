import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imagesRepository: Repository<Image>,
  ) {}
  async create(createImageDto: CreateImageDto) { 
    try { 
      const imageAdd = await this.imagesRepository.save(createImageDto);
      return imageAdd;
    } catch (error) {
      throw new InternalServerErrorException(`${error.message}`);
    } 
  }

  findAll() {
    return this.imagesRepository.find({});
  }

  findOne(id: number) {
    try {
      return this.imagesRepository.findOne({ where: { id } });
    }
    catch(error) {
      throw new InternalServerErrorException(`${error.message}`);
    }
  }
  async remove(id: number) {
    try 
    {
        const image = await this.imagesRepository.findOne({
        where: { id: id },
      });
      await this.imagesRepository.remove(image);
    }
    catch(error)
    {
      throw new InternalServerErrorException(`${error.message}`);
    }

  }
  async update(id: number, updateImageDto: UpdateImageDto) {
    try 
    {
        const imageUpdate = await this.imagesRepository.update(
        {
          id: id,
        },
        {
          image_name: updateImageDto.image_name,
          image_description: updateImageDto.image_description,
          image_link: updateImageDto.image_link
        },
      );
  }
  catch(error)
  {
    throw new InternalServerErrorException(`${error.message}`);
  }
  }
}
