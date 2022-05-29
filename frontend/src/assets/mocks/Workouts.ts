interface Excercise {
  name: string;
  reps: number;
  sets: number;
  break: number;
}

export interface Workout {
  id: number;
  name: string;
  type: 'weight-lifting' | 'swimming' | 'jogging' | 'streching';
  selectedDay: DayOfWeek | null;
  excercises: Excercise[];
  warmupTime: string;
}

const workoutsListMock: Workout[] = [
  {
    id: 0,
    name: 'Legs Workout',
    type: 'weight-lifting',
    selectedDay: 'Monday',
    warmupTime: '15:00',
    excercises: [
      { name: 'squats', sets: 3, reps: 10, break: 90 },
      { name: 'lunages', sets: 4, reps: 20, break: 60 },
    ],
  },
  {
    id: 1,
    name: 'Legs Workout',
    type: 'weight-lifting',
    selectedDay: null,
    warmupTime: '15:00',
    excercises: [
      { name: 'squats', sets: 3, reps: 10, break: 90 },
      { name: 'lunages', sets: 4, reps: 20, break: 60 },
    ],
  },
  {
    id: 2,
    name: 'Chest Workout',
    type: 'weight-lifting',
    warmupTime: '15:00',
    selectedDay: null,
    excercises: [
      { name: 'squats', sets: 3, reps: 10, break: 90 },
      { name: 'lunages', sets: 4, reps: 20, break: 60 },
    ],
  },
  {
    id: 3,
    name: 'Back Workout',
    type: 'weight-lifting',
    warmupTime: '15:00',
    selectedDay: null,
    excercises: [
      { name: 'squats', sets: 3, reps: 10, break: 90 },
      { name: 'lunages', sets: 4, reps: 20, break: 60 },
    ],
  },
  {
    id: 4,
    name: 'Shoulders Workout',
    type: 'weight-lifting',
    selectedDay: null,
    warmupTime: '15:00',
    excercises: [
      { name: 'squats', sets: 3, reps: 10, break: 90 },
      { name: 'lunages', sets: 4, reps: 20, break: 60 },
    ],
  },
];

export default workoutsListMock;
