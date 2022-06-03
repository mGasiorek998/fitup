import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import daysOptions from 'components/organisms/WorkoutForm/daysOptions';

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
  onUpdateDay: (workout: Workout) => void;
  onSelect?: (workout: Workout) => void;
  onDelete: (id: string) => void;
}

export default function WorkoutItem({
  workout,
  onEdit,
  onUpdateDay,
  onSelect,
  onDelete,
}: WorkoutItemProps) {
  const handleSelect = () => {
    onSelect?.(workout);
  };

  const handleEditDay = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdateDay({ ...workout, selectedDay: event.target.value as DayOfWeek });
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
              onClick={() => onDelete(workout._id as string)}
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
          value={workout.selectedDay}
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
