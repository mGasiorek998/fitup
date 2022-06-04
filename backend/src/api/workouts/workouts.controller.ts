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
import { ApiOkResponse } from '@nestjs/swagger';
import { WorkoutDto } from './dto/workout.dto';
import {WorkoutVolumeDto} from "./dto/workout-volume.dto";

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @ApiOkResponse({
    description: 'Respond with workout details',
    type: WorkoutDto,
  })
  @Get()
  async getMany() {
    return await this.workoutsService.findAll();
  }

  @ApiOkResponse({
    description: 'Respond with workout details',
    type: WorkoutDto,
  })
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

  @ApiOkResponse({
    description: 'Respond with workout details for selected day',
    type: WorkoutDto,
  })
  @Get('/details/:selectedDay')
  async getDetails(@Param('selectedDay') selectedDay: string) {
    return await this.workoutsService.getWorkoutsByDay(selectedDay);
  }
  @ApiOkResponse({
    description: 'Respond with workout volume details',
    type: WorkoutVolumeDto,
  })
  @Get('/volume/:id')
  async getVolume(@Param('id') id: string) {
    return await this.workoutsService.getVolume(id);
  }
}
