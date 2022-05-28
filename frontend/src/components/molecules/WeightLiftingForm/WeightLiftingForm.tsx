import React, { useState } from 'react';
import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import ExcerciseForm, { Exercise } from '../ExerciseFrom/ExcerciseForm';
import useModal from 'hooks/useModal';
import Modal from 'components/organisms/Modal/Modal';
import styled from 'styled-components';

const StyledExercisesList = styled.ul`
  max-height: 100px;
  overflow-x: scroll;
`;

export default function WeightLiftingForm() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const { isOpen, openModal, closeModal } = useModal();

  const openExerciseForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    openModal();
  };

  const appendExercise = (e: Exercise) => {
    setExercises((prevState) => [...prevState, e]);
    closeModal();
  };

  return (
    <>
      <FormInput id="rest" name="rest" label="Rest time per exercise" />
      <StyledExercisesList>
        {exercises.map((e, i) => (
          <li key={i}>
            {e.name} {e.sets} x {e.reps}
          </li>
        ))}
      </StyledExercisesList>
      <Button onClick={openExerciseForm} color="secondary">
        Add Exercise
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ExcerciseForm onSumbit={appendExercise} />
      </Modal>
    </>
  );
}
