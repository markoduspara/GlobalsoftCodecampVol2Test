import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateImageDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  link: string;

  @IsOptional()
  @IsBoolean()
  grayscale?: boolean;
}
