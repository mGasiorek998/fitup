import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Meal, MealDocument } from './schemas/meal.schema';

@Injectable()
export class MealsService {
  constructor(@InjectModel(Meal.name) private mealModel: Model<MealDocument>) {}
}
