import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjemplosService } from './ejemplos.service';
import { CreateEjemploDto } from './dto/create-ejemplo.dto';
import { UpdateEjemploDto } from './dto/update-ejemplo.dto';

@Controller('ejemplos')
export class EjemplosController {
  constructor(private readonly ejemplosService: EjemplosService) {}

  @Post()
  create(@Body() createEjemploDto: CreateEjemploDto) {
    return this.ejemplosService.create(createEjemploDto);
  }

  @Get()
  findAll() {
    return this.ejemplosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejemplosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEjemploDto: UpdateEjemploDto) {
    return this.ejemplosService.update(+id, updateEjemploDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejemplosService.remove(+id);
  }
}
