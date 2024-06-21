import { IsNotEmpty } from "class-validator";

export class DeleteImageDto {
    @IsNotEmpty()
    id: number;
}