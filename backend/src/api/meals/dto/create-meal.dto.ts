import { MealDto } from './meal.dto';
import { PartialType } from '@nestjs/mapped-types';

export class CreateMealDto extends PartialType(MealDto) {}
