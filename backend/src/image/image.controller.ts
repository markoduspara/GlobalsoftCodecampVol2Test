import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ResponseImageDto } from './dto/response-image.dto';
import { ApiBadRequestResponse, ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}
  @ApiBody({ type: CreateImageDto })
  @ApiResponse({ status: 201, type: ResponseImageDto })
  @ApiBadRequestResponse({ status: 400, type: String })
  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imageService.create(createImageDto);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
