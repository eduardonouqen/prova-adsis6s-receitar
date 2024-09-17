import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
    ingrediente: string[];
}

export const ReceitaSchema = SchemaFactory.createForClass(Receita);