import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ingrediente } from '../schemas/ingrediente.schema';
import { IngredienteDto } from './ingrediente.dto';

@Injectable()
export class IngredienteService {
    constructor(@InjectModel(Ingrediente.name) private ingredienteModel: Model<Ingrediente>) { }

    async create(IngredienteDto: IngredienteDto): Promise<Ingrediente> {
        const createdIngrediente = new this.ingredienteModel(IngredienteDto);
        return createdIngrediente.save();
    }

    async findAll(): Promise<Ingrediente[]> {
        return this.ingredienteModel.find().exec();
    }

    async findOne(id: number) {
        return this.ingredienteModel.findById(id);
    }

    async delete(id: number) {
        return this.ingredienteModel.findByIdAndDelete(id);
    }

    async update(id: number, ingredienteDto: IngredienteDto) {
        return this.ingredienteModel.findByIdAndUpdate(id, ingredienteDto, { new: true });
    }
}
