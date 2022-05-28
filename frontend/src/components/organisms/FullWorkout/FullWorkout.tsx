import { Workout } from 'assets/mocks/Workouts';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';

interface FullWorkoutProps {
  workout: Workout;
}

const StyledWrapper = styled.div`
  position: relative;
  padding: 2rem;
  min-height: inherit;
  height: 100%;

  & > div {
    margin-bottom: 4rem;
  }

  & > h2 {
    margin-bottom: 4rem;
  }

  & > ul > li {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  & > button {
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
    width: 80%;
  }
`;

export default function FullWorkout({ workout }: FullWorkoutProps) {
  return (
    <StyledWrapper>
      <div>
        <h1>Workout {workout.name}</h1>
        <p>{workout.warmupTime} min of warmup</p>
      </div>
      <h2>Excercises:</h2>
      <ul>
        {workout.excercises.map((excercise, index) => (
          <li key={index}>
            <h3>{excercise.name}</h3>
            <p>
              {excercise.sets} x {excercise.reps}
            </p>
          </li>
        ))}
      </ul>
      <Button color="primary">Start</Button>
    </StyledWrapper>
  );
}
