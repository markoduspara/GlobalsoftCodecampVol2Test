import { PartialType } from '@nestjs/mapped-types';
import { CreateWebimageDto } from './create-webimage.dto';
import { Optional } from '@nestjs/common';

export class UpdateWebimageDto extends PartialType(CreateWebimageDto) {
    @Optional()
    imageName: string;
    @Optional()
    imageDescription: string;
    /* @Optional()
    grayScale: boolean; */
}