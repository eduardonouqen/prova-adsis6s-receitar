import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReceitaController } from './receita.controller';
import { ReceitaService } from './receita.service';
import { Receita, ReceitaSchema } from '../schemas/receita.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Receita.name, schema: ReceitaSchema }])],
  controllers: [ReceitaController],
  providers: [ReceitaService],
})
export class ReceitaModule { }