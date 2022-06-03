import { useCallback, useEffect, useState } from 'react';
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
import DaySummary from 'components/organisms/DaySummary/DaySummary';

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
  const [workoutSelected, setWorkoutSelected] = useState<Workout | null>(null);
  const [workoutToEdit, setWorkoutToEdit] = useState<Workout | null>(null);
  const { isOpen, openModal, closeModal } = useModal();
  const [modalContent, setModalContent] = useState<'form' | 'summary' | ''>('');
  const [selectedDay, setSelectedDay] = useState<DayOfWeek | null>(null);

  const fetchWorkouts = useCallback(async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/workouts`);
      setWorkouts(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const updateWorkouts = async (workout: Workout) => {
    try {
      workoutToEdit
        ? await axios.patch(
            `${process.env.REACT_APP_API}/workouts/${workoutToEdit._id}`,
            removeIdFromWorkout(workout)
          )
        : await axios.post(
            `${process.env.REACT_APP_API}/workouts`,
            removeIdFromWorkout(workout)
          );
      await fetchWorkouts();
      if (workoutSelected && workoutSelected._id === workout._id)
        setWorkoutSelected(workout);
      closeModal();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelectWorkout = (workout: Workout) => setWorkoutSelected(workout);

  const handleEditWorkout = (workout: Workout) => {
    setWorkoutToEdit(workout);
    setModalContent('form');
    openModal();
  };

  const handleDeleteWorkout = async (id: string) => {
    if (workoutSelected && workoutSelected._id === id) setWorkoutSelected(null);

    try {
      await axios.delete(`${process.env.REACT_APP_API}/workouts/${id}`);
      await fetchWorkouts();
    } catch (e) {
      console.error(e);
    }
  };

  const updateWorkoutDay = async (workout: Workout) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_API}/workouts/${workout._id}`,
        removeIdFromWorkout(workout)
      );
      if (workoutSelected && workoutSelected._id === workout._id) {
        setWorkoutSelected(workout);
      }
      await fetchWorkouts();
    } catch (e) {
      console.error(e);
    }
  };

  const showDaySummary = (day: DayOfWeek) => {
    setSelectedDay(day);
    setModalContent('summary');
    openModal();
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
              <Button
                fullWidth
                key={day}
                color="transparent"
                size="large"
                onClick={() => showDaySummary(day)}
              >
                {day}
              </Button>
            ))}
          </StyledCard>
        </StyledSection>
        <StyledSection id="workouts-list">
          <StyledCardHeading>
            <CardHeader>
              <StyledCardHeading>WORKOUTS LIST</StyledCardHeading>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  setModalContent('form');
                  openModal();
                }}
              >
                Add Workout
              </Button>
            </CardHeader>
          </StyledCardHeading>
          <StyledCard contentPos="start">
            <WorkoutList
              workouts={workouts}
              onEditWorkout={handleEditWorkout}
              onUpdateDay={updateWorkoutDay}
              onDeleteWorkout={handleDeleteWorkout}
              onSelect={handleSelectWorkout}
            />
          </StyledCard>
        </StyledSection>
        <StyledSection id="workouts-details">
          <CardHeader>
            <StyledCardHeading>
              {workoutSelected && workoutSelected.name}
            </StyledCardHeading>
          </CardHeader>
          <StyledCard display="block">
            <FullWorkout workout={workoutSelected} />
          </StyledCard>
        </StyledSection>
      </StyledWrapper>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {modalContent === 'form' && (
          <WorkoutForm
            workoutToEdit={workoutToEdit}
            onSubmit={updateWorkouts}
          />
        )}
        {modalContent === 'summary' && <DaySummary day={selectedDay} />}
      </Modal>
    </>
  );
}
