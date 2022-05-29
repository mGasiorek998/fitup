import { Workout } from 'assets/mocks/Workouts';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';

interface WorkoutItemProps {
  workout: Workout;
  onSelect?: (workout: Workout) => void;
}

const StyledWrapper = styled.li`
  min-height: 100px;
  width: 100%;
  margin: 1rem 0;
  box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WorkoutDetails = styled.div`
  margin: 0 1rem;
  & > p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const WorkoutNameWrapper = styled(WorkoutDetails)`
  & > h2 {
    text-align: left;
  }
`;

const WorkoutItemActionsWrapper = styled.div`
  & > button {
    width: 100px;
    margin-right: 8px;
  }
`;

export default function WorkoutItem({ workout, onSelect }: WorkoutItemProps) {
  const handleSelect = () => {
    onSelect?.(workout);
  };

  return (
    <StyledWrapper>
      <WorkoutNameWrapper>
        <h2>{workout.name}</h2>
        <WorkoutItemActionsWrapper>
          <Button color="primary" onClick={handleSelect}>
            Select
          </Button>
          <Button color="secondary">Edit</Button>
        </WorkoutItemActionsWrapper>
      </WorkoutNameWrapper>
      <WorkoutDetails>
        <p>Total excercises: {workout.excercises.length}</p>
        <p>{workout.warmupTime} min warm up</p>
      </WorkoutDetails>
    </StyledWrapper>
  );
}
