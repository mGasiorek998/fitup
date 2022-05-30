type ActionTypes = 'HANDLE_INPUT_CHANGE' | 'SELECT_WORKOUT_TYPE' | 'CLEAR_FORM';

interface Action {
  type: ActionTypes;
  payload?: any;
}

export const initialState: WorkoutFormState = {
  name: '',
  type: '',
};

export const reducer = (state: WorkoutFormState, action: Action) => {
  switch (action.type) {
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
