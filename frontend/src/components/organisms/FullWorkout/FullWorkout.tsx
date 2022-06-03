import { StyledWrapper } from './FullWorkout.styles';

interface FullWorkoutProps {
  workout: Workout | null;
}
export default function FullWorkout({ workout }: FullWorkoutProps) {
  return (
    <StyledWrapper>
      {workout ? (
        <>
          <div>
            <h1>
              {workout.name} ({workout.selectedDay})
            </h1>
            <p>{workout.warmupTime} min of warmup</p>
          </div>
          <div>
            {workout.type === 'weightLifting' && (
              <>
                <h2>Exercises:</h2>
                <ul>
                  {workout.exercises?.map(
                    (exercise: Exercise, index: number) => (
                      <li key={index}>
                        <h3>{exercise.name}</h3>
                        <p>
                          {exercise.sets} x {exercise.reps}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </>
            )}
            {workout.type === 'jogging' && (
              <>
                <h2>Distance: {workout.distance}km</h2>
                <h2>Intervals:</h2>
                <p>Running: {workout.runningTime}</p>
                <p>Rest: {workout.rest}</p>
              </>
            )}
            {workout.type === 'swimming' && (
              <>
                <h2>Swimming style: {workout.style}</h2>
                <h2>Intevals:</h2>
                <p>Swimming: {workout.pools}</p>
                <p>Rest: {workout.rest}</p>
              </>
            )}
            {workout.type === 'wellBeing' && (
              <>
                <h2>{workout.wellBeingType}</h2>
                <p>Time: {workout.time}</p>
              </>
            )}
          </div>
        </>
      ) : (
        <h3>No workout selected!</h3>
      )}
    </StyledWrapper>
  );
}
