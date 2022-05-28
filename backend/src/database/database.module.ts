import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'DB_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          const client = await MongoClient.connect('mongodb://127.0.0.1');

          return client.db('fitup');
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: ['DB_CONNECTION'],
})
export class DatabaseModule {}
