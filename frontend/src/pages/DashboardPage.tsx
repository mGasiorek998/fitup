import { useEffect, useState } from 'react';
import {
  CardHeader,
  StyledCard,
  StyledCardHeading,
  StyledSection,
} from './Page.styles';
import getDay from 'helpers/getDay';
import axios from 'axios';

export default function DashboardPage() {
  const [currentDay, setCurrentDay] = useState<DayOfWeek | null>(null);
  const [todaysWorkouts, setTodaysWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    setCurrentDay(getDay(new Date()));
  }, []);

  useEffect(() => {
    if (!currentDay) return;

    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}/workouts/details/${currentDay}`
        );
        setTodaysWorkouts(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [currentDay]);
  return (
    <>
      <div style={{ margin: '0 2rem' }}>
        <StyledSection>
          <CardHeader>
            <StyledCardHeading>Today: {currentDay}</StyledCardHeading>
          </CardHeader>
          <StyledCard>
            <h2>Workouts for today:</h2>
            <ul>
              {todaysWorkouts.map((workout, index) => (
                <li style={{ margin: '1rem 0' }} key={index}>
                  {workout.name}
                </li>
              ))}
            </ul>
          </StyledCard>
        </StyledSection>
      </div>
    </>
  );
}
