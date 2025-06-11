import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MealBuilderService } from './meal-builder.service';
import { CreateMealBuilderDto } from './dto/create-meal-builder.dto';
import { UpdateMealBuilderDto } from './dto/update-meal-builder.dto';

@Controller('meal-builder')
export class MealBuilderController {
  constructor(private readonly mealBuilderService: MealBuilderService) {}

  @Post()
  create(@Body() createMealBuilderDto: CreateMealBuilderDto) {
    return this.mealBuilderService.create(createMealBuilderDto);
  }

  @Get()
  findAll() {
    return this.mealBuilderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealBuilderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMealBuilderDto: UpdateMealBuilderDto) {
    return this.mealBuilderService.update(+id, updateMealBuilderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealBuilderService.remove(+id);
  }
}
