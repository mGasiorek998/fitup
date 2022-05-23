import { useState } from 'react';
import DayButton from 'components/atoms/DayButton/DayButton';
import {
  StyledWrapper,
  StyledSection,
  StyledCardHeading,
  StyledCard,
} from './WorkoutPage.styles';
import { DAYS_OF_WEEK } from 'helpers/days';

export default function WorkoutsPage() {
  const [daySelected, setDaySelected] = useState<string | null>(null);

  const handleDaySelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDaySelected(event.target.value);
  };

  return (
    <StyledWrapper>
      <StyledSection id="days">
        <StyledCardHeading>SELECT DATE</StyledCardHeading>
        <StyledCard>
          {DAYS_OF_WEEK.map((day) => (
            <DayButton
              key={day}
              day={day}
              isSelected={day === daySelected}
              onSelect={handleDaySelect}
            />
          ))}
        </StyledCard>
      </StyledSection>
      <StyledSection id="workouts-list">
        <StyledCardHeading>
          SELECT WORKOUT {daySelected && `FOR ${daySelected.toUpperCase()}`}
        </StyledCardHeading>
        <StyledCard>workout list here</StyledCard>
      </StyledSection>
      <StyledSection id="workouts-details">
        <StyledCardHeading>Name of the workout here</StyledCardHeading>
        <StyledCard>selected workout routine</StyledCard>
      </StyledSection>
    </StyledWrapper>
  );
}
