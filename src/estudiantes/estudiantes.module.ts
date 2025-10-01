import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';

@Module({
  providers: [EstudiantesService],
  controllers: [EstudiantesController]
})
export class EstudiantesModule {}
