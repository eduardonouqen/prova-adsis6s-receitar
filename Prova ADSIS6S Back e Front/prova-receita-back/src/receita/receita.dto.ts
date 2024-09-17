import { IsOptional } from "class-validator";
import { Ingrediente } from "src/schemas/ingrediente.schema";

export class ReceitaDto {
    @IsOptional()
    id: number;
    name: string;
    tempoPreparo: number;
    custoAproximado: number;
    ingrediente: Ingrediente[];
}