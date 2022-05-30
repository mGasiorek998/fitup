import { useEffect, useState } from 'react';
import DayButton from 'components/atoms/DayButton/DayButton';
import {
  StyledWrapper,
  StyledSection,
  StyledCardHeading,
  StyledCard,
} from './WorkoutPage.styles';
import { DAYS_OF_WEEK } from 'helpers/days';
import { StyledFlexWrapper } from 'assets/styles/FlexContainer.styles';
import Button from 'components/atoms/Button/Button';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'hooks/useModal';
import WorkoutList from 'components/organisms/WorkoutList/WorkoutList';
import workoutsListMock from 'assets/mocks/Workouts';
import FullWorkout from 'components/organisms/FullWorkout/FullWorkout';
import WorkoutForm from 'components/organisms/WorkoutForm/WorkoutForm';

export default function WorkoutsPage() {
  const [daySelected, setDaySelected] = useState<DayOfWeek | null>(null);
  const [selectedWorkouts, setSelectedWorkouts] = useState<Workout[]>([]);
  const [workoutToEdit, setWorkoutToEdit] = useState<Workout | null>(null);
  const { isOpen, openModal, closeModal } = useModal();

  const handleDaySelect = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDaySelected(event.target.value as DayOfWeek);

  const handleSelectWorkout = (workout: Workout) => {
    workoutsListMock.forEach((w) => {
      if (w.name === workout.name) w.selectedDay = daySelected;
    });
  };

  const handleEditWorkout = (workout: Workout) => {
    setWorkoutToEdit(workout);
    openModal();
  };

  useEffect(() => {
    if (!daySelected) return;

    const selectedWorkouts = workoutsListMock.filter(
      (workout) => workout.selectedDay === daySelected
    );

    setSelectedWorkouts(selectedWorkouts);
  }, [daySelected, workoutsListMock]);

  useEffect(() => {
    if (!isOpen) setWorkoutToEdit(null);
  }, [isOpen]);

  return (
    <>
      <StyledWrapper>
        <StyledSection id="days">
          <StyledCardHeading>SELECT DATE</StyledCardHeading>
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
            <StyledFlexWrapper
              justifyContent="space-between"
              alignItems="center"
            >
              SELECT WORKOUT {daySelected && `FOR ${daySelected.toUpperCase()}`}
              <Button size="medium" color="primary" onClick={openModal}>
                Add Workout
              </Button>
            </StyledFlexWrapper>
          </StyledCardHeading>
          <StyledCard contentPos="start">
            <h1>Selected</h1>
            <WorkoutList
              onEditWorkout={handleEditWorkout}
              workouts={selectedWorkouts}
            />
            <h1>All</h1>
            <WorkoutList
              workouts={workoutsListMock}
              onEditWorkout={handleEditWorkout}
              onSelect={handleSelectWorkout}
            />
          </StyledCard>
        </StyledSection>
        <StyledSection id="workouts-details">
          <StyledCardHeading>Name of the workout here</StyledCardHeading>
          <StyledCard display="block">
            <FullWorkout workout={workoutsListMock[0]} />
          </StyledCard>
        </StyledSection>
      </StyledWrapper>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <WorkoutForm workoutToEdit={workoutToEdit} onSubmit={closeModal} />
      </Modal>
    </>
  );
}
