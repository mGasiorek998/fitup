import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { MealsService } from './meals.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  async getMany() {
    await this.mealsService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    await this.mealsService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateMealDto): Promise<void> {
    await this.mealsService.createMeal(body);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateMealDto
  ): Promise<void> {
    await this.mealsService.updateMeal(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mealsService.removeMeal(id);
  }
}
