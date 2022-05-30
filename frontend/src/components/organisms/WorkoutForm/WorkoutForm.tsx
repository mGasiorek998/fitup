import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import JoggingWorkoutForm from 'components/molecules/JoggingWorkoutForm/JoggingWorkoutForm';
import SwimmingWorkoutForm from 'components/molecules/SwimmingWorkoutForm/SwimmingWorkoutForm';
import WeightLiftingForm from 'components/molecules/WeightLiftingForm/WeightLiftingForm';
import WellBeingForm from 'components/molecules/WellbeingForm/WellBeingForm';
import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { initialState, reducer } from './WorkoutFormReducer';
import workoutTypesOptions from './workoutTypesOptions';

interface WorkoutFormProps {
  workoutToEdit: Workout | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 8px 0;
  }
`;

export default function WorkoutForm({
  workoutToEdit,
  onSubmit,
}: WorkoutFormProps) {
  const [state, dispatch] = useReducer(reducer, workoutToEdit || initialState);

  const submitWorkout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state.type, { ...state, selectedDay: null });
    dispatch({
      type: 'CLEAR_FORM',
    });

    onSubmit(e);
  };

  const handleFormValuesChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | ExercisesEvent
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: 'HANDLE_INPUT_CHANGE',
      payload: {
        name,
        value,
      },
    });
  };

  useEffect(() => {
    if (workoutToEdit) dispatch({ type: 'SET_VALUES', payload: workoutToEdit });
  }, [workoutToEdit]);

  return (
    <>
      <h2>Add Workout</h2>
      <StyledForm onSubmit={submitWorkout}>
        <FormInput
          id="workoutName"
          label="Workout name"
          name="name"
          value={state.name}
          onChange={handleFormValuesChange}
        />
        <FormInput
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
        <Button type="submit" color="primary">
          {workoutToEdit ? 'Save' : 'Add'} workout
        </Button>
      </StyledForm>
    </>
  );
}
