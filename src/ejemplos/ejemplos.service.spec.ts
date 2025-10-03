import { Test, TestingModule } from '@nestjs/testing';
import { EjemplosService } from './ejemplos.service';

describe('EjemplosService', () => {
  let service: EjemplosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EjemplosService],
    }).compile();

    service = module.get<EjemplosService>(EjemplosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
