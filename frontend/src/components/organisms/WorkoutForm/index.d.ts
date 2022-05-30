type WorkoutTypes = 'jogging' | 'swimming' | 'weightLifting' | 'wellBeing' | '';

interface WorkoutFormState {
  name: string;
  type: WorkoutTypes;
}

interface ExercisesEvent {
  target: {
    name: string;
    value: Exercise[];
  };
}

interface PartialFormProps {
  onFormValuesChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | ExercisesEvent
  ) => void;
}
