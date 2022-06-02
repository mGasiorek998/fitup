import Button from 'components/atoms/Button/Button';
import { StyledWrapper } from './FullWorkout.styles';

interface FullWorkoutProps {
  workout: Workout;
}
export default function FullWorkout({ workout }: FullWorkoutProps) {
  return (
    <StyledWrapper>
      <div>
        <h1>Workout {workout.name}</h1>
        <p>{workout.warmupTime} min of warmup</p>
      </div>
      <h2>Exercises:</h2>
      <ul>
        {workout.exercises?.map((exercise: Exercise, index: number) => (
          <li key={index}>
            <h3>{exercise.name}</h3>
            <p>
              {exercise.sets} x {exercise.reps}
            </p>
          </li>
        ))}
      </ul>
      <Button size="large" color="primary">
        Start
      </Button>
    </StyledWrapper>
  );
}
