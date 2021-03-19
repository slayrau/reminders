import ActionType from 'src/redux/types/user-lists';

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER_LISTS: {
      return {
        ...state,
        data: action.payload,
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

    case ActionType.RESET: {
      return initialState;
    }

    default: return state;
  }
};

export default reducer;
