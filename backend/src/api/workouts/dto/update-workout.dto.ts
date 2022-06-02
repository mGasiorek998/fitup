import { PartialType } from '@nestjs/mapped-types';
import { CreateMealDto } from 'src/api/meals/dto/create-meal.dto';

export class UpdateWorkoutDto extends PartialType(CreateMealDto) {}
