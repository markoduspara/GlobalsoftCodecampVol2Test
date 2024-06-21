import { Injectable } from '@nestjs/common';
import { CreateWebimageDto } from './dto/create-webimage.dto';
import { UpdateWebimageDto } from './dto/update-webimage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WebImages } from './entities/webimages.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WebimagesService {

  constructor(
    @InjectRepository(WebImages)
    private WebImagesRepository: Repository<WebImages>,
  ) {}

  create(createWebimageDto: CreateWebimageDto) {
    return this.WebImagesRepository.save(createWebimageDto);
  }

  findAll() {
    return this.WebImagesRepository.find({});
  }

  findOne(id: number) {
    return this.WebImagesRepository.find({where: {id}});
  }

  async update(id: number, updateWebimageDto: UpdateWebimageDto) {
    const imageUpdate = await this.WebImagesRepository.update(
      {id: id},{
        imageName: updateWebimageDto.imageName,
        imageDescription: updateWebimageDto.imageDescription,/* 
        grayScale: updateWebimageDto.grayScale, */
      });
      if (imageUpdate.affected > 0) {
        return this.WebImagesRepository.findOne({where: {id}});
      } else {
        return {statusCode: 304, message: 'Not Modified'}
      }
  }

  remove(id: number) {
    return this.WebImagesRepository.delete({id});
  }
}
