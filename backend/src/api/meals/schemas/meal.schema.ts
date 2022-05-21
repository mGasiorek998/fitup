import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MealDocument = Meal & Document;

@Schema()
export class Meal {
  @Prop()
  name: string;
}

export const MealSchema = SchemaFactory.createForClass(Meal);
