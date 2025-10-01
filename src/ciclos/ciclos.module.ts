import { Module } from '@nestjs/common';
import { CiclosService } from './ciclos.service';
import { CiclosController } from './ciclos.controller';

@Module({
  providers: [CiclosService],
  controllers: [CiclosController]
})
export class CiclosModule {}
