import { IsOptional } from "class-validator";

export class IngredienteDto {
    @IsOptional()
    id: number;
    name: string;
}