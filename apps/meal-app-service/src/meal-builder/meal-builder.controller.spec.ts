import { Test, TestingModule } from '@nestjs/testing';
import { MealBuilderController } from './meal-builder.controller';
import { MealBuilderService } from './meal-builder.service';

describe('MealBuilderController', () => {
  let controller: MealBuilderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealBuilderController],
      providers: [MealBuilderService],
    }).compile();

    controller = module.get<MealBuilderController>(MealBuilderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
