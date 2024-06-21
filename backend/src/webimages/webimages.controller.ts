import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebimagesService } from './webimages.service';
import { CreateWebimageDto } from './dto/create-webimage.dto';
import { UpdateWebimageDto } from './dto/update-webimage.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('webimages')
export class WebimagesController {
  constructor(private readonly webimagesService: WebimagesService) {}

  @ApiBody({type: CreateWebimageDto})
  @Post()
  create(@Body() createWebimageDto: CreateWebimageDto) {
    return this.webimagesService.create(createWebimageDto);
  }

  @Get('')
  findAll() {
    return this.webimagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webimagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebimageDto: UpdateWebimageDto) {
    return this.webimagesService.update(+id, updateWebimageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webimagesService.remove(+id);
  }
}
