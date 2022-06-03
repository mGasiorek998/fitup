import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import MealForm from 'components/organisms/MealForm/MealForm';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'hooks/useModal';
import {
  StyledWrapperWithTwoColumns,
  StyledCardHeading,
  StyledSection,
  StyledCard,
  StyledList,
  CardHeader,
  Divider,
} from './Page.styles';
import MealsItem from 'components/molecules/MealsItem/MealsItem';
import FullMeal from 'components/organisms/FullMeal/FullMeal';
import { removeIdFromEntity } from 'helpers/removeId';

export default function MealsPage() {
  const [mealsList, setMealsList] = useState<Meal[]>([]);
  const [likedMealsList, setLikedMealsList] = useState<Meal[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [mealToEdit, setMealToEdit] = useState<Meal | null>(null);
  const { isOpen, openModal, closeModal } = useModal();

  const fetchMeals = useCallback(async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/meals`);
    const likedMeals = data.filter((meal: Meal) => meal.didLike === true);
    setMealsList(data);
    setLikedMealsList(likedMeals);
  }, []);

  const selectMeal = async (id: string) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/meals/${id}`
      );
      setSelectedMeal(data);
    } catch (e) {
      console.error(e);
    }
  };

  const appendMeal = (meal: Meal | null) => {
    closeModal();
    // update selected meal:
    if (meal) setSelectedMeal(meal);
    fetchMeals();
  };

  const editMeal = (meal: Meal) => {
    setMealToEdit(meal);
    openModal();
  };

  const deleteMeal = async (id: string) => {
    const foundMeal = mealsList.find((meal) => meal._id === id);
    try {
      await axios.delete(`${process.env.REACT_APP_API}/meals/${id}`);
      // unselect meal if deleted:
      if (JSON.stringify(foundMeal) === JSON.stringify(selectedMeal))
        setSelectedMeal(null);
      fetchMeals();
    } catch (e) {
      console.error(e);
    }
  };

  const likeMeal = async (liked: boolean) => {
    if (!selectedMeal) return;
    const likedMeal = { ...selectedMeal, didLike: !liked };

    // update selected meal
    setSelectedMeal(likedMeal);

    try {
      await axios.patch(
        `${process.env.REACT_APP_API}/meals/${selectedMeal._id}`,
        removeIdFromEntity(likedMeal)
      );
      fetchMeals();
    } catch (e) {
      console.error(e);
    }
  };

  // fetch meals on page load:
  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    if (!isOpen) setMealToEdit(null);
  }, [isOpen]);

  return (
    <>
      <StyledWrapperWithTwoColumns>
        <StyledSection id="meals">
          <CardHeader>
            <StyledCardHeading>MEALS</StyledCardHeading>
            <Button size="small" color="primary" onClick={openModal}>
              Add Meal
            </Button>
          </CardHeader>
          <StyledCard contentPos="start">
            {likedMealsList.length > 0 && (
              <>
                <h3>Pinned</h3>
                <StyledList>
                  {likedMealsList.map(
                    (meal) =>
                      meal.name && (
                        <MealsItem
                          meal={meal}
                          key={meal._id}
                          onSeeDetials={selectMeal}
                          onDelete={deleteMeal}
                          onEdit={editMeal}
                        />
                      )
                  )}
                </StyledList>
                <Divider />
              </>
            )}
            {mealsList.length > 0 ? (
              <>
                <StyledList>
                  {mealsList.map(
                    (meal) =>
                      meal.name && (
                        <MealsItem
                          meal={meal}
                          key={meal._id}
                          onSeeDetials={selectMeal}
                          onDelete={deleteMeal}
                          onEdit={editMeal}
                        />
                      )
                  )}
                </StyledList>
              </>
            ) : (
              <h2>No meals yet added</h2>
            )}
          </StyledCard>
        </StyledSection>
        <StyledSection id="fullMeal">
          <CardHeader>
            <StyledCardHeading>FULL MEAL</StyledCardHeading>
          </CardHeader>
          <StyledCard>
            {selectedMeal ? (
              <FullMeal meal={selectedMeal} onLikeButtonClick={likeMeal} />
            ) : (
              <h2>No meal selected</h2>
            )}
          </StyledCard>
        </StyledSection>
      </StyledWrapperWithTwoColumns>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <MealForm mealToEdit={mealToEdit} onSuccess={appendMeal} />
      </Modal>
    </>
  );
}
