type WorkoutTypes = 'jogging' | 'swimming' | 'weightLifting' | 'wellBeing' | '';

interface Exercise {
  name: string;
  sets: number;
  reps: number;
}

interface WorkoutFormState extends Workout {}

interface Workout {
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
  selectedDay?: DayOfWeek | null;
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
