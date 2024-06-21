import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsUrl, Length } from 'class-validator';

export class CreateImageDto {
@ApiProperty({
    description: 'Image name must be string',
    example: 'image name',
    minimum: 1,
    })
    
  @IsString()
  @Length(1, 100)
  image_name: string;

  @ApiProperty({
    description: 'Image description must be string',
    example: 'image description',
    minimum: 1,
    })
  @IsString()
  @Length(0, 255)
  image_description: string;

  @ApiProperty({
    description: 'Image link must be url',
    example: 'https://picsum.photos/id/1/200/300',
    minimum: 1,
    })
  @IsString()
  @IsUrl()
  @Length(1, 255)
  image_link: string;

  @ApiProperty({
    description: 'Grayscale must be boolean',
    example: 'false',
    })
  @IsBoolean()
  grayscale: boolean;
}
