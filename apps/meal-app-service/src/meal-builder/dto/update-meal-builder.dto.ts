import { PartialType } from '@nestjs/mapped-types';
import { CreateMealBuilderDto } from './create-meal-builder.dto';

export class UpdateMealBuilderDto extends PartialType(CreateMealBuilderDto) {}
