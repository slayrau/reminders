import ActionType from 'src/redux/types/current-list';

const initialState = {
  data: {},
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_LIST: {
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
