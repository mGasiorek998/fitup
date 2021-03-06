import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export type WorkoutTypes =
  | 'jogging'
  | 'swimming'
  | 'weightLifting'
  | 'wellBeing';

export enum DayOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
}

export class WorkoutDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  type: WorkoutTypes;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  warmupTime: number;

  @IsNotEmpty()
  @ApiProperty()
  selectedDay: DayOfWeek | null;

  @IsOptional()
  @ApiPropertyOptional()
  style?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  pools?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  rest?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  distance?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  time?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  runningTime?: number;

  @IsOptional()
  @ApiPropertyOptional()
  exercises?: Exercise[];

  @IsOptional()
  @ApiPropertyOptional()
  wellBeingType?: string;
}
