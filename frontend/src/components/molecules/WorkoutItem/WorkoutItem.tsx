import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import daysOptions from 'components/organisms/WorkoutForm/daysOptions';
import { API } from 'pages/MealsPage';
import { removeIdFromWorkout } from 'pages/WorkoutsPage';
import { useState } from 'react';

import {
  StyledWrapper,
  WorkoutNameWrapper,
  WorkoutItemActionsWrapper,
  WorkoutDetails,
  WorkoutAction,
} from './WorkoutItem.styles';

interface WorkoutItemProps {
  workout: Workout;
  onEdit: () => void;
  onSelect?: (workout: Workout) => void;
  onDelete: (id: string) => void;
}

export default function WorkoutItem({
  workout,
  onEdit,
  onSelect,
  onDelete,
}: WorkoutItemProps) {
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>(
    workout.selectedDay
  );

  const handleSelect = () => {
    onSelect?.(workout);
  };

  const handleEditDay = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      setSelectedDay(event.target.value as DayOfWeek);
      await axios.patch(
        `${API}/workouts/${workout._id}`,
        removeIdFromWorkout({
          ...workout,
          selectedDay: event.target.value as DayOfWeek,
        })
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StyledWrapper>
      <WorkoutNameWrapper>
        <h2>{workout.name}</h2>
        <WorkoutItemActionsWrapper>
          <WorkoutAction fullWidth>
            <Button
              fullWidth
              size="small"
              color="primary"
              onClick={handleSelect}
            >
              See details
            </Button>
          </WorkoutAction>
          <WorkoutAction>
            <Button fullWidth size="small" color="secondary" onClick={onEdit}>
              Edit
            </Button>
          </WorkoutAction>
          <WorkoutAction>
            <Button
              fullWidth
              size="small"
              color="secondary"
              onClick={() => onDelete(workout._id)}
            >
              Delete
            </Button>
          </WorkoutAction>
        </WorkoutItemActionsWrapper>
      </WorkoutNameWrapper>
      <WorkoutDetails>
        <FormInput
          id="selectedDay"
          name="selectedDay"
          label="On day"
          type="select"
          options={daysOptions}
          value={selectedDay}
          onSelectItem={handleEditDay}
          withoutEmptyOption
        >
          On day: {workout.selectedDay}
        </FormInput>
        <p>Warm up: {workout.warmupTime} min</p>
      </WorkoutDetails>
    </StyledWrapper>
  );
}
