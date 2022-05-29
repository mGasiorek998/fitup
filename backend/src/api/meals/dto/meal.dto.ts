import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class MealDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  ingredients: string[];

  @IsOptional()
  wayOfPreparation?: string;

  @IsOptional()
  avgCookingTime?: number;

  @IsOptional()
  @IsInt()
  calories?: number;

  @IsOptional()
  picture?: string;

  @IsOptional()
  didLike?: boolean;
}
