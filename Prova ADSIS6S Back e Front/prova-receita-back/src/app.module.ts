import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReceitaModule } from './receita/receita.module';
import { IngredienteModule } from './ingrediente/ingrediente.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/prova'), ReceitaModule, IngredienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
