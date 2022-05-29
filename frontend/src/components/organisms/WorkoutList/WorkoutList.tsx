import { Workout } from 'assets/mocks/Workouts';
import WorkoutItem from 'components/molecules/WorkoutItem/WorkoutItem';
import styled from 'styled-components';

interface WorkoutListProps {
  workouts: Workout[];
  onSelect?: (workout: Workout) => void;
}

const StyledWrapper = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0 1rem;
`;

export default function WorkoutList({ workouts, onSelect }: WorkoutListProps) {
  return (
    <StyledWrapper>
      {workouts.map((workout) => (
        <WorkoutItem key={workout.id} workout={workout} onSelect={onSelect} />
      ))}
    </StyledWrapper>
  );
}
