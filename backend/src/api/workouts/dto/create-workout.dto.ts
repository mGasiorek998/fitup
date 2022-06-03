import { PartialType } from '@nestjs/mapped-types';

import { WorkoutDto } from './workout.dto';

export class CreateWorkoutDto extends PartialType(WorkoutDto) {}
