import React, { useReducer } from 'react';
import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import IngredeintForm from 'components/molecules/IngredientForm/IngredientForm';
import useModal from 'hooks/useModal';
import { API, Meal, removeIdFromMeal } from 'pages/MealsPage';
import Modal from '../Modal/Modal';
import { StyledForm, StyledIngredientsList } from './MealsForm.styles';
import { reducer, initialState } from './MealsFormReducer';

interface MealFormProps {
  mealToEdit: Meal | null;
  onSuccess: (meal: Meal | null) => void;
}

export default function MealForm({ mealToEdit, onSuccess }: MealFormProps) {
  const [state, dispatch] = useReducer(reducer, mealToEdit || initialState);
  const { isOpen, openModal, closeModal } = useModal();

  const submitMeal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      !mealToEdit
        ? await axios.post(`${API}/meals/`, state)
        : await axios.patch(
            `${API}/meals/${mealToEdit._id}`,
            removeIdFromMeal(state as Meal)
          );
      mealToEdit ? onSuccess(state as Meal) : onSuccess(null);
    } catch (e) {
      console.error(e);
    }
  };

  const appendIngredeints = (newIngredient: string) => {
    dispatch({
      type: 'UPDATE_INGREDIENTS',
      payload: [...state.ingredients, newIngredient],
    });
    closeModal();
  };

  const deleteIngredient = (idx: number) => {
    dispatch({
      type: 'UPDATE_INGREDIENTS',
      payload: state.ingredients.filter((_, i) => idx !== i),
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <StyledForm onSubmit={submitMeal}>
        <FormInput
          id="name"
          name="name"
          type="text"
          label="name"
          value={state.name}
          onChange={handleInputChange}
        />
        <FormInput
          id="picture"
          name="picture"
          type="url"
          label="Picture url"
          value={state.picture}
          onChange={handleInputChange}
        />
        <FormInput
          id="description"
          name="description"
          type="textarea"
          label="description"
          value={state.description}
          onChange={handleInputChange}
        />
        <FormInput
          id="avgCookingTime"
          name="avgCookingTime"
          type="number"
          label="Average cooking time"
          value={`${state.avgCookingTime}`}
          onChange={handleInputChange}
        />
        <FormInput
          id="calories"
          name="calories"
          type="number"
          label="Calories"
          value={`${state.calories}`}
          onChange={handleInputChange}
        />
        <div>
          {state.ingredients.length ? (
            <StyledIngredientsList>
              {state.ingredients.map((ing, i) => (
                <li key={i}>
                  <span>{ing}</span>
                  <Button
                    type="button"
                    size="small"
                    color="primary"
                    onClick={() => deleteIngredient(i)}
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </StyledIngredientsList>
          ) : (
            <h6>No igredients added.</h6>
          )}
        </div>
        <Button
          fullWidth
          type="button"
          color="primary"
          size="medium"
          onClick={openModal}
        >
          Add ingredient
        </Button>
        <Button fullWidth type="submit" color="primary" size="medium">
          {mealToEdit ? 'Save' : 'Add'} meal
        </Button>
      </StyledForm>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <IngredeintForm onSubmit={appendIngredeints} />
      </Modal>
    </>
  );
}
