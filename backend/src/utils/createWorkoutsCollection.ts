export const createWorkoutsCollection = (db) => {
  db.createCollection('workouts', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        additionalProperties: false,
        required: ['_id', 'name', 'type', 'warmupTime', 'selectedDay'],
        properties: {
          _id: { bsonType: 'objectId' },
          name: {
            bsonType: 'string',
            description: 'must be a string and is required',
          },
          type: {
            bsonType: 'string',
            description: 'must be a string and is required',
          },
          warmupTime: {
            bsonType: 'integer',
            description: 'must be a integer and is required',
          },
          selectedDay: {
            bsonType: 'string',
            description: 'must be a string if the field exists',
          },
          style: {
            bsonType: ['string'],
            description: 'must be a string if the field exists',
          },
          pools: {
            bsonType: ['integer'],
            description: 'must be a integer if the field exists',
          },
          rest: {
            bsonType: ['integer'],
            description: 'must be a integer if the field exists',
          },
          distance: {
            bsonType: ['integer'],
            description: 'must be a integer if the field exists',
          },
          time: {
            bsonType: ['integer'],
            description: 'must be a integer if the field exists',
          },
          runningTime: {
            bsonType: ['integer'],
            description: 'must be a integer if the field exists',
          },
          exercises: {
            bsonType: ['array'],
            description: 'must be an array if the field exists',
          },
          wellBeingType: {
            bsonType: ['string'],
            description: 'must be a string if the field exists',
          },
        },
      },
    },
  });
};
