import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Receita } from '../schemas/receita.schema';
import { ReceitaDto } from './receita.dto';

@Injectable()
export class ReceitaService {
    constructor(@InjectModel(Receita.name) private receitaModel: Model<Receita>) { }

    async create(ReceitaDto: ReceitaDto): Promise<Receita> {
        const createdReceita = new this.receitaModel(ReceitaDto);
        return createdReceita.save();
    }

    async findAll(): Promise<Receita[]> {
        return this.receitaModel.find().exec();
    }

    async findOne(id: number) {
        return this.receitaModel.findById(id);
    }

    async delete(id: number) {
        return this.receitaModel.findByIdAndDelete(id);
    }

    async update(id: number, receitaDto: ReceitaDto) {
        return this.receitaModel.findByIdAndUpdate(id, receitaDto, { new: true });
    }
}
