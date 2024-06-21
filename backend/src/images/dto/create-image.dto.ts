import { IsNotEmpty } from "class-validator";

export class createImageDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

}