import { Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';
import { createMealsCollection } from '../utils/createMealsCollection';

@Module({
  providers: [
    {
      provide: 'DB_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          const client = await MongoClient.connect('mongodb://127.0.0.1');

          const db = client.db('fitup');
          const collections = await db.listCollections().toArray();
          const namesOfCollections = collections.map(
            (collection) => collection.name
          );
          if (!namesOfCollections.includes('meals')) {
            createMealsCollection(db);
          }

          return db;
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: ['DB_CONNECTION'],
})
export class DatabaseModule {}
