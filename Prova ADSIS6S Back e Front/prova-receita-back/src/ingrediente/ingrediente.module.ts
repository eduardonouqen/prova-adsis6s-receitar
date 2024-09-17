import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredienteController } from './ingrediente.controller';
import { IngredienteService } from './ingrediente.service';
import { Ingrediente, IngredienteSchema } from '../schemas/ingrediente.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ingrediente.name, schema: IngredienteSchema }])],
  controllers: [IngredienteController],
  providers: [IngredienteService],
})
export class IngredienteModule { }