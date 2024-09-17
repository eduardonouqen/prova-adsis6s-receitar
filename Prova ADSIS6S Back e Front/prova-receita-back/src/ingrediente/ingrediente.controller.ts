import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { IngredienteDto } from './ingrediente.dto';

@Controller('ingrediente')
export class IngredienteController {
    constructor(private ingredienteService: IngredienteService) { }

    @Get()
    findAll() {
        return this.ingredienteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.ingredienteService.findOne(id);
    }

    @Post()
    create(@Body() ingredienteDto: IngredienteDto) {
        return this.ingredienteService.create(ingredienteDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.ingredienteService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() ingredienteDto: IngredienteDto) {
        return this.ingredienteService.update(id, ingredienteDto);
    }
}