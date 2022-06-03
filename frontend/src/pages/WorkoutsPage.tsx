import { useCallback, useEffect, useState } from 'react';
import DayButton from 'components/atoms/DayButton/DayButton';
import {
  StyledWrapper,
  StyledSection,
  StyledCardHeading,
  StyledCard,
  CardHeader,
} from './Page.styles';
import { DAYS_OF_WEEK } from 'helpers/days';
import Button from 'components/atoms/Button/Button';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'hooks/useModal';
import WorkoutList from 'components/organisms/WorkoutList/WorkoutList';
import FullWorkout from 'components/organisms/FullWorkout/FullWorkout';
import WorkoutForm from 'components/organisms/WorkoutForm/WorkoutForm';
import axios from 'axios';
import { API } from './MealsPage';

export const removeIdFromWorkout = (workout: Workout) => {
  const workoutWithoutId: { [key: string]: string | number | boolean } = {};
  for (const [key, value] of Object.entries(workout)) {
    if (key !== '_id') {
      workoutWithoutId[key] = value;
    }
  }

  return workoutWithoutId;
};

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [daySelected, setDaySelected] = useState<DayOfWeek | null>(null);
  const [workoutToEdit, setWorkoutToEdit] = useState<Workout | null>(null);
  const { isOpen, openModal, closeModal } = useModal();

  const fetchWorkouts = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API}/workouts`);
      setWorkouts(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const addNewWorkout = () => {
    fetchWorkouts();
    closeModal();
  };

  const handleDaySelect = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDaySelected(event.target.value as DayOfWeek);

  const handleEditWorkout = (workout: Workout) => {
    setWorkoutToEdit(workout);
    openModal();
  };

  const handleDeleteWorkout = async (id: string) => {
    try {
      await axios.delete(`${API}/workouts/${id}`);
      fetchWorkouts();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  useEffect(() => {
    if (!isOpen && workoutToEdit !== null) setWorkoutToEdit(null);
  }, [isOpen]);

  return (
    <>
      <StyledWrapper>
        <StyledSection id="days">
          <CardHeader>
            <StyledCardHeading>SELECT DATE</StyledCardHeading>
          </CardHeader>
          <StyledCard>
            {DAYS_OF_WEEK.map((day) => (
              <DayButton
                key={day}
                day={day}
                isSelected={day === daySelected}
                onSelect={handleDaySelect}
              />
            ))}
          </StyledCard>
        </StyledSection>
        <StyledSection id="workouts-list">
          <StyledCardHeading>
            <CardHeader>
              <StyledCardHeading>WORKOUTS LIST</StyledCardHeading>
              <Button size="small" color="primary" onClick={openModal}>
                Add Workout
              </Button>
            </CardHeader>
          </StyledCardHeading>
          <StyledCard contentPos="start">
            <WorkoutList
              workouts={workouts}
              onEditWorkout={handleEditWorkout}
              onDeleteWorkout={handleDeleteWorkout}
              onSelect={() => console.log('onSelect()')}
            />
          </StyledCard>
        </StyledSection>
        <StyledSection id="workouts-details">
          <CardHeader>
            <StyledCardHeading>Name of the workout here</StyledCardHeading>
          </CardHeader>
          <StyledCard display="block">
            {/* <FullWorkout workout={} /> */}
          </StyledCard>
        </StyledSection>
      </StyledWrapper>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <WorkoutForm workoutToEdit={workoutToEdit} onSubmit={addNewWorkout} />
      </Modal>
    </>
  );
}
