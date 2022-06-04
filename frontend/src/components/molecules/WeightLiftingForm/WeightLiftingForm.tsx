import React, { useEffect, useState } from 'react';
import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import ExcerciseForm, { Exercise } from '../ExerciseFrom/ExcerciseForm';
import useModal from 'hooks/useModal';
import Modal from 'components/organisms/Modal/Modal';
import { StyledExercisesList } from './WeightLiftingForm.styles';

export default function WeightLiftingForm({
  defaultValues,
  onFormValuesChange,
}: PartialFormProps) {
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

  const deleteExercise = (name: string) => {
    const newArr = exercises.filter((e) => e.name !== name);
    setExercises(newArr);
  };

  useEffect(() => {
    const event: ExercisesEvent = {
      target: {
        name: 'exercises',
        value: exercises,
      },
    };

    onFormValuesChange(event);
  }, [exercises]);

  useEffect(() => {
    if (defaultValues?.exercises) setExercises(defaultValues?.exercises);
  }, []);

  return (
    <>
      <FormInput
        id="rest"
        name="rest"
        label="Rest time per exercise (in seconds)"
        value={defaultValues?.rest ? `${defaultValues.rest}` : ''}
        onChange={onFormValuesChange}
      />
      <StyledExercisesList>
        {exercises.map((e, i) => (
          <li key={i}>
            <span>
              {e.name} {e.sets} x {e.reps}
            </span>
            <Button
              type="button"
              id="deleteExercise"
              size="small"
              color="primary"
              onClick={() => deleteExercise(e.name)}
            >
              Delete
            </Button>
          </li>
        ))}
      </StyledExercisesList>
      <Button size="small" onClick={openExerciseForm} color="secondary">
        Add Exercise
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ExcerciseForm onSumbit={appendExercise} />
      </Modal>
    </>
  );
}
