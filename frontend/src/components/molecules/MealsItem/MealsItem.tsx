import Button from 'components/atoms/Button/Button';
import { Meal } from 'pages/MealsPage';
import {
  MealNameWrapper,
  MealsActions,
  MealSummaryWrapper,
  StyledItem,
} from './MealsItem.styles';

interface MealsItemProps {
  meal: Meal;
  onSeeDetials: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (meal: Meal) => void;
}

export default function MealsItem({
  meal,
  onDelete,
  onSeeDetials,
  onEdit,
}: MealsItemProps) {
  return (
    <StyledItem>
      <MealNameWrapper>
        <h2>{meal.name}</h2>
        <p>Calories: {meal.calories}kcal</p>
      </MealNameWrapper>
      <MealSummaryWrapper>
        <p>Total ingredients: {meal.ingredients.length}</p>
        <p>Cooking time: {meal.avgCookingTime}min</p>
        <Button
          fullWidth
          color="primary"
          size="small"
          onClick={() => onSeeDetials(meal._id)}
        >
          See Details
        </Button>
        <MealsActions>
          <Button
            fullWidth
            color="secondary"
            size="small"
            onClick={() => onEdit(meal)}
          >
            Edit
          </Button>
          <Button
            fullWidth
            color="secondary"
            size="small"
            onClick={() => onDelete(meal._id)}
          >
            Delete
          </Button>
        </MealsActions>
      </MealSummaryWrapper>
    </StyledItem>
  );
}
