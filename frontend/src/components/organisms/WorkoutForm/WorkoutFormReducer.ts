type ActionTypes =
  | 'HANDLE_INPUT_CHANGE'
  | 'SELECT_WORKOUT_TYPE'
  | 'CLEAR_FORM'
  | 'SET_VALUES';

interface Action {
  type: ActionTypes;
  payload?: any;
}

export const initialState: Workout = {
  _id: '',
  name: '',
  type: '',
  warmupTime: -1,
  selectedDay: 'Monday',
};

export const reducer = (state: Workout, action: Action) => {
  switch (action.type) {
    case 'SET_VALUES':
      return action.payload as Workout;
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
