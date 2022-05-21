import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealsModule } from './api/meals/meals.module';

@Module({
  imports: [MealsModule,MongooseModule.forRoot('mongodb://localhost/fitup')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
