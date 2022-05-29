import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealsModule } from './api/meals/meals.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [MealsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
