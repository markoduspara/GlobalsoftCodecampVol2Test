import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { ResponsePictureDto } from './dto/response-picture.dto';
import { Picture } from './entities/picture.entity';

@Controller('pictures')
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}

  @Post()
  create(@Body() createPictureDto: CreatePictureDto): Promise<ResponsePictureDto> {
    return this.picturesService.create(createPictureDto);
  }

  @Get()
  findAll(): Promise<Picture[]> {
    return this.picturesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Picture> {
    return this.picturesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePictureDto: UpdatePictureDto): Promise<ResponsePictureDto | { statusCode: string }> {
    return this.picturesService.update(+id, updatePictureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<string> {
    return this.picturesService.remove(+id);
  }
}
