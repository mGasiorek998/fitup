import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import React, { useState } from 'react';
import { StyledForm } from './IngredientForm.styles';

interface IngredeintFormProps {
  onSubmit: (ingredient: string) => void;
}

export default function IngredeintForm({ onSubmit }: IngredeintFormProps) {
  const [ingredient, setIngredient] = useState({
    ingredientName: '',
    ingredientCount: '',
    ingredientAmount: '',
  });

  const handleSubmit = () => {
    const { ingredientName, ingredientAmount, ingredientCount } = ingredient;
    const newIngredient = `${ingredientName}(${ingredientAmount}g) x ${ingredientCount}`;
    onSubmit(newIngredient);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <StyledForm>
      <FormInput
        id="ingredientName"
        type="text"
        name="ingredientName"
        label="name"
        value={ingredient.ingredientName}
        onChange={handleInputChange}
      />
      <FormInput
        id="ingredientCount"
        type="number"
        min={1}
        name="ingredientCount"
        label="How much?"
        value={ingredient.ingredientCount}
        onChange={handleInputChange}
      />
      <FormInput
        id="ingredientAmount"
        type="number"
        min={1}
        name="ingredientAmount"
        label="How much (in g)?"
        value={ingredient.ingredientAmount}
        onChange={handleInputChange}
      />
      <Button
        disabled={
          !ingredient.ingredientName ||
          +ingredient.ingredientAmount <= 0 ||
          +ingredient.ingredientCount <= 0
        }
        type="button"
        fullWidth
        color="primary"
        size="medium"
        onClick={handleSubmit}
      >
        Add
      </Button>
    </StyledForm>
  );
}
