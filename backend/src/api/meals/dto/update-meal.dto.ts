import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMealDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @ApiProperty()
  ingredients: string[];

  @IsOptional()
  @ApiPropertyOptional()
  wayOfPreparation?: string;

  @IsOptional()
  @ApiPropertyOptional()
  avgCookingTime?: number;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional()
  calories?: number;

  @IsOptional()
  @ApiPropertyOptional()
  picture?: string;

  @IsOptional()
  @ApiPropertyOptional()
  didLike?: boolean;
}
