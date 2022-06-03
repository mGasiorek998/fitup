type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

type WorkoutTypes = 'jogging' | 'swimming' | 'weightLifting' | 'wellBeing' | '';

interface Meal {
  _id: string;
  name: string;
  description: string;
  ingredients: string[];
  wayOfPreparation?: string;
  avgCookingTime?: number;
  calories?: number;
  picture?: string;
  didLike?: boolean;
}

interface Exercise {
  name: string;
  sets: number;
  reps: number;
}

interface Workout {
  _id: string;
  type: WorkoutTypes;
  name: string;
  warmupTime: number;
  style?: string;
  pools?: number;
  rest?: number;
  runningTime?: number;
  exercises?: Exercise[];
  distance?: number;
  wellBeingType?: string;
  time?: number;
  selectedDay: DayOfWeek;
}

interface ExercisesEvent {
  target: {
    name: string;
    value: Exercise[];
  };
}

interface PartialFormProps {
  defaultValues?: Partial<Workout>;
  onFormValuesChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | ExercisesEvent
  ) => void;
}
