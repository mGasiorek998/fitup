import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { WorkoutTypes, DayOfWeek, Exercise } from './workout.dto';

export class UpdateWorkoutDto {
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
  selectedDay: DayOfWeek;

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
