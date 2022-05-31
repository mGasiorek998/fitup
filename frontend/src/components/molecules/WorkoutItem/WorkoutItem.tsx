import Button from 'components/atoms/Button/Button';

import {
  StyledWrapper,
  WorkoutNameWrapper,
  WorkoutItemActionsWrapper,
  WorkoutDetails,
} from './WorkoutItem.styles';

interface WorkoutItemProps {
  workout: Workout;
  onEdit: () => void;
  onSelect?: (workout: Workout) => void;
}

export default function WorkoutItem({
  workout,
  onEdit,
  onSelect,
}: WorkoutItemProps) {
  const handleSelect = () => {
    onSelect?.(workout);
  };

  return (
    <StyledWrapper>
      <WorkoutNameWrapper>
        <h2>{workout.name}</h2>
        <WorkoutItemActionsWrapper>
          <Button size="small" color="primary" onClick={handleSelect}>
            Select
          </Button>
          <Button size="small" color="secondary" onClick={onEdit}>
            Edit
          </Button>
        </WorkoutItemActionsWrapper>
      </WorkoutNameWrapper>
      <WorkoutDetails>
        <p>Total exercises: {workout.exercises?.length}</p>
        <p>{workout.warmupTime} min warm up</p>
      </WorkoutDetails>
    </StyledWrapper>
  );
}
