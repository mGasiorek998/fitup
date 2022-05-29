import React from 'react';
import { StyledDayButton } from './DayButton.styles';

interface DayButtonProps {
  day: DayOfWeek;
  isSelected: boolean;
  onSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DayButton({
  day,
  isSelected,
  onSelect,
}: DayButtonProps) {
  return (
    <StyledDayButton isSelected={isSelected} onChange={onSelect}>
      <input type="radio" id={day} name="dayOfWeek" value={day} />
      <label htmlFor={day}>{day}</label>
    </StyledDayButton>
  );
}
