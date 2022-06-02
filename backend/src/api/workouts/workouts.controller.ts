import {
  Body,
  Delete,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Get()
  async getMany() {
    return await this.workoutsService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.workoutsService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateWorkoutDto) {
    return await this.workoutsService.createWorkout(body);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateWorkoutDto
  ): Promise<void> {
    await this.workoutsService.updateWorkout(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.workoutsService.removeWorkout(id);
  }
}
