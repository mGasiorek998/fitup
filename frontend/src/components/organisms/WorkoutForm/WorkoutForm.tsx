import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import JoggingWorkoutForm from 'components/molecules/JoggingWorkoutForm/JoggingWorkoutForm';
import SwimmingWorkoutForm from 'components/molecules/SwimmingWorkoutForm/SwimmingWorkoutForm';
import WeightLiftingForm from 'components/molecules/WeightLiftingForm/WeightLiftingForm';
import WellBeingForm from 'components/molecules/WellbeingForm/WellBeingForm';
import React, { useReducer } from 'react';
import styled from 'styled-components';
import { initialState, reducer } from './WorkoutFormReducer';
import workoutTypesOptions from './workoutTypesOptions';

interface WorkoutFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 8px 0;
  }
`;

export default function WorkoutForm({ onSubmit }: WorkoutFormProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitWorkout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state.type, state);
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
          label="Workout type"
          options={workoutTypesOptions}
          onSelectItem={handleFormValuesChange}
        />
        {state.type === 'jogging' && (
          <JoggingWorkoutForm onFormValuesChange={handleFormValuesChange} />
        )}
        {state.type === 'swimming' && (
          <SwimmingWorkoutForm onFormValuesChange={handleFormValuesChange} />
        )}
        {state.type === 'wellBeing' && (
          <WellBeingForm onFormValuesChange={handleFormValuesChange} />
        )}
        {state.type === 'weightLifting' && (
          <WeightLiftingForm onFormValuesChange={handleFormValuesChange} />
        )}
        <Button type="submit" color="primary">
          Add workout
        </Button>
      </StyledForm>
    </>
  );
}
