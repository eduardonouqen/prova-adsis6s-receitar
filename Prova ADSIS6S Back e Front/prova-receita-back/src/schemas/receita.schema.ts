import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Ingrediente } from './ingrediente.schema';

export type ReceitaDocument = HydratedDocument<Receita>;

@Schema()
export class Receita {
    @Prop()
    name: string;

    @Prop()
    tempoPreparo: number;

    @Prop()
    custoAproximado: number;

    @Prop()
    ingrediente: Ingrediente[];
}

export const ReceitaSchema = SchemaFactory.createForClass(Receita);