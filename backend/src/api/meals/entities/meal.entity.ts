export class Meal {
  name: string;
  description: string;
  ingredients: string[];
  wayOfPreparation?: string;
  avgCookingTime?: number;
  calories?: number;
  picture?: string;
  didLike?: boolean;

  constructor(
    name: string,
    description: string,
    ingredients: string[],
    wayOfPreparation?: string,
    avgCookingTime?: number,
    calories?: number,
    picture?: string,
    didLike?: boolean
  ) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.wayOfPreparation = wayOfPreparation;
    this.avgCookingTime = avgCookingTime;
    this.calories = calories;
    this.picture = picture;
    this.didLike = didLike;
  }
}
