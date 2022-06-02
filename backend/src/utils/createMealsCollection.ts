export const createMealsCollection = (db) => {
  db.createCollection('meals', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        additionalProperties: false,
        required: ['_id', 'name', 'description', 'ingredients'],
        properties: {
          _id: { bsonType: 'objectId' },
          name: {
            bsonType: 'string',
            description: 'must be a string and is required',
          },
          description: {
            bsonType: 'string',
            description: 'must be a string and is required',
          },
          ingredients: {
            bsonType: 'array',
            description: 'must be a string and is required',
          },
          wayOfPreparation: {
            bsonType: ['string'],
            description: 'must be a string if the field exists',
          },
          avgCookingTime: {
            bsonType: ['int'],
            description: 'must be a integer if the field exists',
          },
          calories: {
            bsonType: ['int'],
            description: 'must be a integer if the field exists',
          },
          picture: {
            bsonType: ['string'],
            description: 'must be a string if the field exists',
          },
          didLike: {
            bsonType: ['bool'],
            description: 'must be a bool if the field exists',
          },
        },
      },
    },
  });
};
