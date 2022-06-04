import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Db, InsertOneResult, ObjectId } from 'mongodb';
import { Redis } from 'redis';

import {UpdateWorkoutDto} from "./dto/update-workout.dto";
import {CreateWorkoutDto} from "./dto/create-workout.dto";

@Injectable()
export class WorkoutsService {
  constructor(
    @Inject('DB_CONNECTION')
    private db: Db,
    @Inject('REDIS_CLIENT') private readonly redis: Redis
  ) {}

  async findAll() {
    return await this.db.collection('workouts').find().toArray();
  }

  async findOne(id: string) {
    const dataInRedis = await this.redis.get(id);
    if (dataInRedis) {
      return JSON.parse(dataInRedis);
    }
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException();
    }

    const response = await this.db.collection('workouts').findOne({
      _id: new ObjectId(id),
    });

    if (!response) {
      throw new NotFoundException();
    }
    this.redis.set(id, JSON.stringify(response));
    return response;
  }

  async createWorkout(body: CreateWorkoutDto): Promise<InsertOneResult<Document>> {
    return await this.db.collection('workouts').insertOne(body);
  }

  async updateWorkout(id: string, body: UpdateWorkoutDto) {
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

    await this.redis.del(id)

    const response = await this.db.collection('workouts').deleteOne({
      _id: new ObjectId(id),
    });

    if (response.deletedCount === 0) {
      throw new NotFoundException();
    }
  }

  async getWorkoutsByDay(selectedDay: string) {
    if (selectedDay) {
      return this.db
        .collection('workouts')
        .aggregate([
          {
            $match: {
              selectedDay: selectedDay,
            },
          },
        ])
        .toArray();
    }
  }

  async getVolume(id: string) {
    if (id) {
      return this.db
        .collection('workouts')
        .aggregate([
          {
            $match: {
              _id: new ObjectId(id),
            },
          },
          {
            $unwind: '$exercises',
          },
          {
            $project: {
              exercises: '$exercises',
              volume: { $multiply: ['$exercises.sets', '$exercises.reps'] },
            },
          },
        ])
        .toArray();
    }
  }
}
