import { IsNotEmpty, IsOptional } from "class-validator";

export class ReceitaDto {
    @IsOptional()
    id: number;
    name: string;
    tempoPreparo: number;
    custoAproximado: number;
    ingrediente: string[];
}