import {Controller, Get, Post, Delete, Patch, Param} from '@nestjs/common';

import {MealsService} from "./meals.service";

@Controller('meals')
export class MealsController {

  constructor(
    private readonly mealsService: MealsService,
  ) {}


  @Get()
  getAllMeals(): string {
    return 'list of all meals goes here'
  }

  @Get(':id')
  getSingleMeal(@Param('id') id: string): string {
    console.log(id)
    return id
  }

  @Post()
  addMeal(): string {
    return 'create new meal!'
  }

  @Patch()
  updateMeal(): string {
    return 'update meal!'
  }

  @Delete()
  removeMeal(): string {
    return 'remove meal'
  }
}
