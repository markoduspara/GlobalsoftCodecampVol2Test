import { IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from "@nestjs/mapped-types";
import { Picture } from "../entities/picture.entity";

export class CreatePictureDto extends PartialType(Picture){
    @IsNotEmpty()
    imageName: string;

    imageDescription: string;

    @ApiProperty({
        description: 'imageLink must have a link!',
        example: 'http://www.example.com',
    })
    @IsNotEmpty()
    imageLink: string;
}

