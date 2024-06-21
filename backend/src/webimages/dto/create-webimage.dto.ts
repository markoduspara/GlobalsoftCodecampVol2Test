import { PartialType } from "@nestjs/mapped-types";
import { WebImages } from "../entities/webimages.entity";
import { IsBoolean, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateWebimageDto extends PartialType(WebImages) {
    @ApiProperty({
        description: 'Image name',
        example: 'Cute cat #3',
    })
    @IsNotEmpty()
    imageName: string;
    @ApiProperty({
        description: 'Image description',
        example: 'An image of a cute cat',
    })
    imageDescription: string;

    @ApiProperty({
        description: 'Image link',
        example: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    })
    @IsNotEmpty()
    imageLink: string;
/* 
    @ApiProperty({
        description: 'Image grayscale',
        default: false,
    })
    @IsNotEmpty()
    grayScale: boolean;
 */
}
