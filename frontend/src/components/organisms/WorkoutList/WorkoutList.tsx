import WorkoutItem from 'components/molecules/WorkoutItem/WorkoutItem';
import styled from 'styled-components';

interface WorkoutListProps {
  workouts: Workout[];
  onEditWorkout: (workout: Workout) => void;
  onSelect?: (workout: Workout) => void;
}

const StyledWrapper = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0 1rem;
`;

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
