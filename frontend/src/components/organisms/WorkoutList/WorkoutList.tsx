import WorkoutItem from 'components/molecules/WorkoutItem/WorkoutItem';
import { StyledWrapper } from './WorkoutList.styles';

interface WorkoutListProps {
  workouts: Workout[];
  onEditWorkout: (workout: Workout) => void;
  onSelect?: (workout: Workout) => void;
}
export default function WorkoutList({
  workouts,
  onEditWorkout,
  onSelect,
}: WorkoutListProps) {
  return (
    <StyledWrapper>
      {workouts.map((workout, index) => (
        <WorkoutItem
          key={index}
          onEdit={() => onEditWorkout(workout)}
          workout={workout}
          onSelect={onSelect}
        />
      ))}
    </StyledWrapper>
  );
}
