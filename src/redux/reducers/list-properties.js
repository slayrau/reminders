import ActionType from 'src/redux/types/list-properties';

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN: {
      return {
        ...state,
        isOpen: true,
      };
    }

    case ActionType.CLOSE: {
      return {
        ...state,
        isOpen: false,
      };
    }

    default: return state;
  }
};

export default reducer;
