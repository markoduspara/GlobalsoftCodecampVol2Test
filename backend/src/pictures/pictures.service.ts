import { Injectable } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { ResponsePictureDto } from './dto/response-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Picture } from './entities/picture.entity';

@Injectable()
export class PicturesService {
  constructor(
    @InjectRepository(Picture)
    private picturesRepository: Repository<Picture>,
  ) {}

  async create(createPictureDto: CreatePictureDto): Promise<ResponsePictureDto> {
    const pictureCreate = await this.picturesRepository.save(createPictureDto);
    return pictureCreate;
  }

  findAll(): Promise<Picture[]> {
    return this.picturesRepository.find({});
  }

  findOne(id: number): Promise<Picture> {
    return this.picturesRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePictureDto: UpdatePictureDto): Promise<ResponsePictureDto | { statusCode: string }> {
    const imageUpdate = await this.picturesRepository.update(
      {
        id: id,
      },
      {
        imageName: updatePictureDto.imageName,
        imageDescription: updatePictureDto.imageDescription,
        imageLink: updatePictureDto.imageLink,
      },
    );
    if (imageUpdate.affected > 0) {
      return this.picturesRepository.findOne({ where: { id } });
    } else {
      return { statusCode: '304' };
    }
  }

  async remove(id: number): Promise<string> {
    const result = await this.picturesRepository.delete({ id });

    if (result.affected > 0) {
      return `Picture with ID ${id} has been removed.`;
    } else {
      return `Picture with ID ${id} not found.`;
    }}
}
