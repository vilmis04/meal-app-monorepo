import { Injectable } from '@nestjs/common';
import { CreateMealBuilderDto } from './dto/create-meal-builder.dto';
import { UpdateMealBuilderDto } from './dto/update-meal-builder.dto';

@Injectable()
export class MealBuilderService {
  create(createMealBuilderDto: CreateMealBuilderDto) {
    return 'This action adds a new mealBuilder';
  }

  findAll() {
    return `This action returns all mealBuilder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mealBuilder`;
  }

  update(id: number, updateMealBuilderDto: UpdateMealBuilderDto) {
    return `This action updates a #${id} mealBuilder`;
  }

  remove(id: number) {
    return `This action removes a #${id} mealBuilder`;
  }
}
