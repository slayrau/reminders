import ActionType from 'src/redux/types/auth';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case ActionType.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case ActionType.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case ActionType.RESET_AUTH: {
      return initialState;
    }

    default: return state;
  }
};

export default reducer;
