import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import JoggingWorkoutForm from 'components/molecules/JoggingWorkoutForm/JoggingWorkoutForm';
import SwimmingWorkoutForm from 'components/molecules/SwimmingWorkoutForm/SwimmingWorkoutForm';
import WeightLiftingForm from 'components/molecules/WeightLiftingForm/WeightLiftingForm';
import WellBeingForm from 'components/molecules/WellbeingForm/WellBeingForm';
import React, { useEffect, useReducer } from 'react';
import { StyledForm } from './WorkoutForm.styles';
import { initialState, reducer } from './WorkoutFormReducer';
import workoutTypesOptions from './workoutTypesOptions';
import daysOptions from './daysOptions';

interface WorkoutFormProps {
  workoutToEdit: Workout | null;
  onSubmit: (workout: Workout) => void;
}

export default function WorkoutForm({
  workoutToEdit,
  onSubmit,
}: WorkoutFormProps) {
  const [state, dispatch] = useReducer(reducer, workoutToEdit || initialState);

  const submitWorkout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(state);
  };

  const handleFormValuesChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | ExercisesEvent
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: 'HANDLE_INPUT_CHANGE',
      payload: {
        name,
        value: isNaN(+value) ? value : +value,
      },
    });
  };

  useEffect(() => {
    if (workoutToEdit) dispatch({ type: 'SET_VALUES', payload: workoutToEdit });
  }, [workoutToEdit]);

  return (
    <>
      <h2>{workoutToEdit ? 'Edit' : 'Add'} Workout</h2>
      <StyledForm onSubmit={submitWorkout}>
        <FormInput
          id="workoutName"
          label="Workout name"
          name="name"
          value={state.name}
          onChange={handleFormValuesChange}
        />
        <FormInput
          id="selectedDay"
          label="Select day"
          name="selectedDay"
          options={daysOptions}
          type="select"
          onSelectItem={handleFormValuesChange}
          withoutEmptyOption
        />
        <FormInput
          disabled={!!workoutToEdit}
          id="workoutType"
          name="type"
          type="select"
          value={state.type}
          label="Workout type"
          options={workoutTypesOptions}
          onSelectItem={handleFormValuesChange}
        />
        <FormInput
          id="warmupTime"
          name="warmupTime"
          type="text"
          label="Warmup time"
          value={state.warmupTime >= 0 ? `${state.warmupTime}` : ''}
          onChange={handleFormValuesChange}
        />
        {state.type === 'jogging' && (
          <JoggingWorkoutForm
            defaultValues={state}
            onFormValuesChange={handleFormValuesChange}
          />
        )}
        {state.type === 'swimming' && (
          <SwimmingWorkoutForm
            defaultValues={state}
            onFormValuesChange={handleFormValuesChange}
          />
        )}
        {state.type === 'wellBeing' && (
          <WellBeingForm
            defaultValues={state}
            onFormValuesChange={handleFormValuesChange}
          />
        )}
        {state.type === 'weightLifting' && (
          <WeightLiftingForm
            defaultValues={state}
            onFormValuesChange={handleFormValuesChange}
          />
        )}
        <Button size="medium" type="submit" color="primary">
          {workoutToEdit ? 'Save' : 'Add'} workout
        </Button>
      </StyledForm>
    </>
  );
}
