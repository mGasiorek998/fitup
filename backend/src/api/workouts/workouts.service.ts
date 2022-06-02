import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Db, InsertOneResult, ObjectId } from 'mongodb';
import { CreateMealDto } from '../meals/dto/create-meal.dto';
import { UpdateMealDto } from '../meals/dto/update-meal.dto';

@Injectable()
export class WorkoutsService {
  constructor(
    @Inject('DB_CONNECTION')
    private db: Db
  ) {}

  async findAll() {
    return await this.db.collection('workouts').find().toArray();
  }

  async findOne(id: string) {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException();
    }

    const response = await this.db.collection('workouts').findOne({
      _id: new ObjectId(id),
    });

    if (!response) {
      throw new NotFoundException();
    }

    return response;
  }

  async createWorkout(body: CreateMealDto): Promise<InsertOneResult<Document>> {
    return await this.db.collection('workouts').insertOne(body);
  }

  async updateWorkout(id: string, body: UpdateMealDto) {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException();
    }

    return await this.db.collection('workouts').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...body,
        },
      }
    );
  }

  async removeWorkout(id: string): Promise<void> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException();
    }

    const response = await this.db.collection('workouts').deleteOne({
      _id: new ObjectId(id),
    });

    if (response.deletedCount === 0) {
      throw new NotFoundException();
    }
  }
}
