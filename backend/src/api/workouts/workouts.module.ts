import { Module } from '@nestjs/common';

import { WorkoutsService } from './workouts.service';
import { WorkoutsController } from './workouts.controller';
import { DatabaseModule } from '../../database/database.module';
import { RedisModule } from '../redis.module';

@Module({
  imports: [DatabaseModule, RedisModule],
  providers: [WorkoutsService],
  controllers: [WorkoutsController],
})
export class WorkoutsModule {}
