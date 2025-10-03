import { Test, TestingModule } from '@nestjs/testing';
import { EjemplosController } from './ejemplos.controller';
import { EjemplosService } from './ejemplos.service';

describe('EjemplosController', () => {
  let controller: EjemplosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EjemplosController],
      providers: [EjemplosService],
    }).compile();

    controller = module.get<EjemplosController>(EjemplosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
