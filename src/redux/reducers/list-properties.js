import ActionType from 'src/redux/types/list-properties';

const initialState = {
  isOpen: false,
  id: null,
  title: null,
  color: null,
  icon: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CREATE_NEW_LIST: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case ActionType.OPEN_LIST: {
      return {
        ...state,
        isOpen: true,
      };
    }

    case ActionType.CLOSE_LIST: {
      return {
        ...state,
        isOpen: false,
      };
    }

    case ActionType.RESET: {
      return initialState;
    }

    default: return state;
  }
};

export default reducer;
