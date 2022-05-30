type ActionTypes =
  | 'HANDLE_INPUT_CHANGE'
  | 'SELECT_WORKOUT_TYPE'
  | 'CLEAR_FORM'
  | 'SET_VALUES';

interface Action {
  type: ActionTypes;
  payload?: any;
}

export const initialState: WorkoutFormState = {
  name: '',
  type: '',
  warmupTime: -1,
};

export const reducer = (state: WorkoutFormState, action: Action) => {
  switch (action.type) {
    case 'SET_VALUES':
      return action.payload as WorkoutFormState;
    case 'HANDLE_INPUT_CHANGE':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'SELECT_WORKOUT_TYPE':
      return {
        ...state,
        type: action.payload as WorkoutTypes,
      };
    case 'CLEAR_FORM':
      return initialState;
    default:
      return state;
  }
};
