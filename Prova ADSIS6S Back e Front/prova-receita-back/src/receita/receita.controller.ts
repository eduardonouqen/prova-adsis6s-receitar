import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { ReceitaDto } from './receita.dto';

@Controller('receita')
export class ReceitaController {
    constructor(private receitaService: ReceitaService) { }

    @Get()
    findAll() {
        return this.receitaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.receitaService.findOne(id);
    }

    @Post()
    create(@Body() receitaDto: ReceitaDto) {
        return this.receitaService.create(receitaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.receitaService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() receitaDto: ReceitaDto) {
        return this.receitaService.update(id, receitaDto);
    }
}