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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSumbit(excercise);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExercise((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        id="excerciseName"
        name="name"
        label="Name"
        onChange={handleInputChange}
      />
      <FormInput
        type="number"
        id="excerciseSets"
        name="sets"
        label="Sets"
        onChange={handleInputChange}
      />
      <FormInput
        type="number"
        id="excerciseReps"
        name="reps"
        label="Repetitions"
        onChange={handleInputChange}
      />
      <Button
        disabled={!excercise.name || !excercise.sets || !excercise.reps}
        type="submit"
        color="primary"
      >
        Add
      </Button>
    </form>
  );
}
