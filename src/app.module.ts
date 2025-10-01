import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocentesModule } from './docentes/docentes.module';
import { EspecialidadesModule } from './especialidades/especialidades.module';
import { CarrerasModule } from './carreras/carreras.module';
import { CiclosModule } from './ciclos/ciclos.module';
import { MateriasModule } from './materias/materias.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';

@Module({
  imports: [DocentesModule, EspecialidadesModule, CarrerasModule, CiclosModule, MateriasModule, EstudiantesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
