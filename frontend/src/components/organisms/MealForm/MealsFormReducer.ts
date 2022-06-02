export interface MealsFormState {
  name: string;
  description: string;
  ingredients: string[];
  wayOfPreparation: string;
  avgCookingTime: number;
  calories: number;
  picture: string;
  didLike: boolean;
}

type ActionTypes = 'HANDLE_INPUT_CHANGE' | 'CLEAR_FORM' | 'UPDATE_INGREDIENTS';

interface Action {
  type: ActionTypes;
  payload?: any;
}

export const initialState: MealsFormState = {
  name: '',
  description: '',
  wayOfPreparation: '',
  ingredients: [],
  avgCookingTime: 0,
  calories: 0,
  picture: '',
  didLike: false,
};

export const reducer = (state: MealsFormState, action: Action) => {
  switch (action.type) {
    case 'HANDLE_INPUT_CHANGE':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'UPDATE_INGREDIENTS':
      return {
        ...state,
        ingredients: action.payload as string[],
      };
    case 'CLEAR_FORM':
      return initialState;
    default:
      return state;
  }
};
