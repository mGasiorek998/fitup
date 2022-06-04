import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import React, { useState } from 'react';

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
}

interface ExcerciseFormProps {
  onSumbit: (e: Exercise) => void;
}

export default function ExcerciseForm({ onSumbit }: ExcerciseFormProps) {
  const [excercise, setExercise] = useState<Exercise>({} as Exercise);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSumbit(excercise);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExercise((prevState) => ({
      ...prevState,
      [event.target.name]:
        event.target.value === ''
          ? ''
          : isNaN(+event.target.value)
          ? event.target.value
          : +event.target.value,
    }));
  };

  return (
    <>
      <FormInput
        type="text"
        id="excerciseName"
        pattern="[a-zA-Z]*"
        name="name"
        label="Name"
        onChange={handleInputChange}
      />
      <FormInput
        type="number"
        min={1}
        id="excerciseSets"
        name="sets"
        label="Sets"
        onChange={handleInputChange}
      />
      <FormInput
        type="number"
        min={1}
        id="excerciseReps"
        name="reps"
        label="Repetitions"
        onChange={handleInputChange}
      />
      <Button
        fullWidth
        disabled={!excercise.name || !excercise.sets || !excercise.reps}
        type="submit"
        size="medium"
        color="primary"
        onClick={handleSubmit}
      >
        Add
      </Button>
    </>
  );
}
