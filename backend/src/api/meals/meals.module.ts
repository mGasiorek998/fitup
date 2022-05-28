import { Module } from '@nestjs/common';

import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [MealsService],
  controllers: [MealsController],
})
export class MealsModule {}
