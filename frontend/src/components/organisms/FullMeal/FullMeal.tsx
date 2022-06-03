import {
  FullMealWrapper,
  IngredientsList,
  MealDetails,
  MealDetial,
  MealHeader,
  MealLikeButton,
  MealSummary,
} from './FullMeal.styles';

interface FullMealProps {
  meal: Meal;
  onLikeButtonClick: (liked: boolean) => void;
}

export default function FullMeal({ meal, onLikeButtonClick }: FullMealProps) {
  return (
    <FullMealWrapper>
      <MealHeader>
        {meal.picture && (
          <img src={meal.picture} alt={`${meal.name} picture`} />
        )}
        <MealSummary pictureExist={!!meal.picture}>
          <h1>{meal.name}</h1>
          <p>Calories: {meal.calories}kcal</p>
          <p>Time: {meal.avgCookingTime}min</p>
        </MealSummary>
      </MealHeader>
      <MealDetails>
        <MealDetial fullWidth>
          <h2>Description</h2>
          <p>{meal.description}</p>
        </MealDetial>
        <MealDetial>
          <h2>Preparation</h2>
          <p>{meal.wayOfPreparation}</p>
        </MealDetial>
        <MealDetial>
          <h2>Ingredients</h2>
          <IngredientsList>
            {meal.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </IngredientsList>
        </MealDetial>
      </MealDetails>
      <MealLikeButton
        type="button"
        color="primary"
        size="large"
        onClick={() => onLikeButtonClick(meal.didLike || false)}
      >
        {meal.didLike ? 'Unlike' : 'Like'}
      </MealLikeButton>
    </FullMealWrapper>
  );
}
