import React, { useReducer } from 'react';
import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import IngredeintForm from 'components/molecules/IngredientForm/IngredientForm';
import useModal from 'hooks/useModal';
import Modal from '../Modal/Modal';
import { StyledForm, StyledIngredientsList } from './MealsForm.styles';
import { reducer, initialState, MealsFormState } from './MealsFormReducer';
import { removeIdFromEntity } from 'helpers/removeId';

interface MealFormProps {
  mealToEdit: Meal | null;
  onSuccess: (meal: Meal | null) => void;
}

export default function MealForm({ mealToEdit, onSuccess }: MealFormProps) {
  const [state, dispatch] = useReducer(
    reducer,
    (mealToEdit as MealsFormState) || initialState
  );
  const { isOpen, openModal, closeModal } = useModal();

  const submitMeal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      !mealToEdit
        ? await axios.post(`${process.env.REACT_APP_API}/meals/`, state)
        : await axios.patch(
            `${process.env.REACT_APP_API}/meals/${mealToEdit._id}`,
            removeIdFromEntity(state as Meal)
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
        value: value === '' ? '' : isNaN(+value) ? value : +value,
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
          label="Name"
          pattern="[a-zA-Z]*"
          required={true}
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
          pattern="[a-zA-Z]*"
          label="Description"
          required={true}
          value={state.description}
          onChange={handleInputChange}
        />
        <FormInput
          id="wayOfPreparation"
          name="wayOfPreparation"
          type="text"
          label="Preparation"
          required={true}
          value={state.wayOfPreparation}
          onChange={handleInputChange}
        />
        <FormInput
          id="avgCookingTime"
          name="avgCookingTime"
          type="number"
          label="Average cooking time (in mins)"
          required={true}
          min={1}
          value={`${state.avgCookingTime}`}
          onChange={handleInputChange}
        />
        <FormInput
          id="calories"
          name="calories"
          type="number"
          label="Calories"
          required={true}
          min={1}
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
            <h5>No igredients added.</h5>
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
        <Button
          disabled={state.ingredients.length <= 0}
          fullWidth
          type="submit"
          color="primary"
          size="medium"
        >
          {mealToEdit ? 'Save' : 'Add'} meal
        </Button>
      </StyledForm>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <IngredeintForm onSubmit={appendIngredeints} />
      </Modal>
    </>
  );
}
