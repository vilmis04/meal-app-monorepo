import { Module } from '@nestjs/common';
import { MealBuilderService } from './meal-builder.service';
import { MealBuilderController } from './meal-builder.controller';

@Module({
  controllers: [MealBuilderController],
  providers: [MealBuilderService],
})
export class MealBuilderModule {}
