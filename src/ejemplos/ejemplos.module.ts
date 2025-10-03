import { Module } from '@nestjs/common';
import { EjemplosService } from './ejemplos.service';
import { EjemplosController } from './ejemplos.controller';

@Module({
  controllers: [EjemplosController],
  providers: [EjemplosService],
})
export class EjemplosModule {}
