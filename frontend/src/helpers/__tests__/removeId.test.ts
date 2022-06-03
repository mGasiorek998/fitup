import { removeIdFromEntity } from 'helpers/removeId';

describe('removeId from meal', () => {
  it('removes id from meal', () => {
    const meal: Meal = {
      _id: 'id',
      name: 'meal',
      description: 'test',
      ingredients: [],
    };

    const mealWithoutId = removeIdFromEntity(meal);
    expect(mealWithoutId).toEqual({
      name: 'meal',
      description: 'test',
      ingredients: [],
    });
  });

  it('removes id from workout', () => {
    const workout: Workout = {
      _id: 'id',
      name: 'meal',
      type: '',
      warmupTime: 0,
      selectedDay: 'Monday',
    };

    const workoutWithoutId = removeIdFromEntity(workout);
    expect(workoutWithoutId).toEqual({
      name: 'meal',
      type: '',
      warmupTime: 0,
      selectedDay: 'Monday',
    });
  });
});

export {};
