import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Db, InsertOneResult, ObjectId } from 'mongodb';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

@Injectable()
export class MealsService {
  constructor(
    @Inject('DB_CONNECTION')
    private db: Db
  ) {}

  async findAll() {
    return await this.db.collection('meals').find().toArray();
  }

  async findOne(id: string) {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException();
    }

    const response = await this.db.collection('meals').findOne({
      _id: new ObjectId(id),
    });

    if (!response) {
      throw new NotFoundException();
    }

    return response;
  }

  async createMeal(body: CreateMealDto): Promise<InsertOneResult<Document>> {
    return await this.db.collection('meals').insertOne(body);
  }

  async updateMeal(id: string, body: UpdateMealDto) {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException();
    }

    return await this.db.collection('meals').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...body,
        },
      }
    );
  }

  async removeMeal(id: string): Promise<void> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException();
    }

    const response = await this.db.collection('meals').deleteOne({
      _id: new ObjectId(id),
    });

    if (response.deletedCount === 0) {
      throw new NotFoundException();
    }
  }
}
