import { Module } from '@nestjs/common';
import { EspecialidadesService } from './especialidades.service';
import { EspecialidadesController } from './especialidades.controller';

@Module({
  providers: [EspecialidadesService],
  controllers: [EspecialidadesController]
})
export class EspecialidadesModule {}
