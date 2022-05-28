import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class MealsService {
  constructor(
    @Inject('DB_CONNECTION')
    private db: Db
  ) {}

  async findAll(): Promise<any> {
    try {
      return await this.db.collection('meals').find().toArray();
    } catch (err) {
      console.log(err);
      return 'error';
    }
  }

  async findOne(): Promise<any> {
    return await this.db.collection('meals').find().toArray();
  }

  async createMeal(): Promise<any> {
    return await this.db.collection('meals').insertOne({ test: 'test2' });
  }
}
