import axios from 'axios';
import { Divider } from 'pages/Page.styles';
import { useEffect, useState } from 'react';
import { DaySummaryWrapper } from './DaySummary.styles';

interface DaySummaryProps {
  day: DayOfWeek | null;
}
export default function DaySummary({ day }: DaySummaryProps) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [totalVolume, setTotalVolume] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}/workouts/details/${day}`
        );
        setWorkouts(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (!workouts.length) return;

    (async () => {
      let totalVolume = 0;
      for (const workout of workouts) {
        if (workout.type !== 'weightLifting') continue;
        try {
          const { data } = await axios.get(
            `${process.env.REACT_APP_API}/workouts/volume/${workout._id}`
          );
          // sum up volume of each exercise
          totalVolume += data.reduce(
            (total: number, current: { volume: number }) => {
              return total + current.volume;
            },
            0
          );
        } catch (e) {
          console.error(e);
        }
      }
      setTotalVolume(totalVolume);
    })();
  }, [workouts]);

  return (
    <DaySummaryWrapper>
      <h1>Workouts for {day}</h1>
      <Divider />
      {workouts.length ? (
        <>
          <ul>
            {workouts.map((workout) => (
              <li key={workout._id}>
                {workout.name} ({workout.type})
              </li>
            ))}
          </ul>
          {totalVolume > 0 && (
            <p>
              <b>Todays volume</b>: {totalVolume}
            </p>
          )}
        </>
      ) : (
        'No workouts for today'
      )}
    </DaySummaryWrapper>
  );
}
