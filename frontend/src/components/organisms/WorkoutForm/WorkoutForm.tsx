import FormInput from 'components/atoms/FormInput/FormInput';
import JoggingWorkoutForm from 'components/molecules/JoggingWorkoutForm/JoggingWorkoutForm';
import SwimmingWorkoutForm from 'components/molecules/SwimmingWorkoutForm/SwimmingWorkoutForm';
import WeightLiftingForm from 'components/molecules/WeightLiftingForm/WeightLiftingForm';
import WellBeingForm from 'components/molecules/WellbeingForm/WellBeingForm';
import React, { useState } from 'react';
import styled from 'styled-components';
import workoutTypesOptions from './workoutTypesOptions';

// TODO: On submit I should get whole form;

type workoutTypes = 'jogging' | 'swimming' | 'weightLifting' | 'wellBeing' | '';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 8px 0;
  }
`;

export default function WorkoutForm() {
  const [selectedWorkoutType, setSelectedWorkoutType] =
    useState<workoutTypes>('');

  const selectWorkoutType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWorkoutType(event.target.value as workoutTypes);
  };

  return (
    <>
      <h2>Add Workout</h2>
      <StyledForm>
        <FormInput id="workoutName" label="Workout name" />
        <FormInput
          id="workoutType"
          type="select"
          label="Workout type"
          options={workoutTypesOptions}
          onSelectItem={selectWorkoutType}
        />
        {selectedWorkoutType === 'jogging' && <JoggingWorkoutForm />}
        {selectedWorkoutType === 'swimming' && <SwimmingWorkoutForm />}
        {selectedWorkoutType === 'wellBeing' && <WellBeingForm />}
        {selectedWorkoutType === 'weightLifting' && <WeightLiftingForm />}
      </StyledForm>
    </>
  );
}
