import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

type WorkoutTypes = 'jogging' | 'swimming' | 'weightLifting' | 'wellBeing';

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

interface Exercise {
  name: string;
  sets: number;
  reps: number;
}

export class WorkoutDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: WorkoutTypes;

  @IsNotEmpty()
  @IsNumber()
  warmupTime: number;

  @IsNotEmpty()
  selectedDay: DayOfWeek | null;

  @IsOptional()
  style?: string;

  @IsOptional()
  @IsNumber()
  pools?: number;

  @IsOptional()
  @IsNumber()
  rest?: number;

  @IsOptional()
  @IsNumber()
  distance?: number;

  @IsOptional()
  @IsNumber()
  time?: number;

  @IsOptional()
  @IsNumber()
  runningTime?: number;

  @IsOptional()
  exercises?: Exercise[];

  @IsOptional()
  wellBeingType?: string;
}
