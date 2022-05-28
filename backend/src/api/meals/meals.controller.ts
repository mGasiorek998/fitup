import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { MealsService } from './meals.service';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  getAllMeals(): any {
    return this.mealsService.findAll();
  }

  @Get(':id')
  getSingleMeal(@Param('id') id: string): string {
    console.log(id);
    return id;
  }

  @Post()
  addMeal(): any {
    return this.mealsService.createMeal();
  }

  @Patch()
  updateMeal(): string {
    return 'update meal!';
  }

  @Delete()
  removeMeal(): string {
    return 'remove meal';
  }
}
