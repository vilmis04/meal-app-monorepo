import { Test, TestingModule } from '@nestjs/testing';
import { MealBuilderService } from './meal-builder.service';

describe('MealBuilderService', () => {
  let service: MealBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealBuilderService],
    }).compile();

    service = module.get<MealBuilderService>(MealBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
