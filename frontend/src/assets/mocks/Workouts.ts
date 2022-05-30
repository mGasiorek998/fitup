const workoutsListMock: Workout[] = [
  {
    name: 'Legs Workout',
    type: 'weightLifting',
    selectedDay: 'Monday',
    warmupTime: 15,
    rest: 90,
    exercises: [
      { name: 'squats', sets: 3, reps: 10 },
      { name: 'lunages', sets: 4, reps: 20 },
    ],
  },
  {
    name: 'Quick Jog',
    type: 'jogging',
    selectedDay: 'Monday',
    warmupTime: 5,
    distance: 3,
    rest: 2,
    runningTime: 10,
  },
  {
    name: 'Hardcore Swim',
    type: 'swimming',
    selectedDay: 'Monday',
    warmupTime: 2,
    rest: 3,
    pools: 30,
    style: 'butterfly',
  },
  {
    name: 'Late night Meditation',
    type: 'wellBeing',
    selectedDay: 'Monday',
    warmupTime: 0,
    time: 30,
    wellBeingType: 'meditation',
  },
];

export default workoutsListMock;
