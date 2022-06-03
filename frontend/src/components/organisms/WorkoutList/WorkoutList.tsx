import WorkoutItem from 'components/molecules/WorkoutItem/WorkoutItem';
import { StyledWrapper } from './WorkoutList.styles';

interface WorkoutListProps {
  workouts: Workout[];
  onEditWorkout: (workout: Workout) => void;
  onUpdateDay: (workout: Workout) => void;
  onDeleteWorkout: (id: string) => void;
  onSelect?: (workout: Workout) => void;
}
export default function WorkoutList({
  workouts,
  onUpdateDay,
  onDeleteWorkout,
  onEditWorkout,
  onSelect,
}: WorkoutListProps) {
  return (
    <StyledWrapper>
      {workouts.map((workout, index) => (
        <WorkoutItem
          key={index}
          onEdit={() => onEditWorkout(workout)}
          onDelete={onDeleteWorkout}
          onUpdateDay={onUpdateDay}
          workout={workout}
          onSelect={onSelect}
        />
      ))}
    </StyledWrapper>
  );
}
