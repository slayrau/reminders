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
    case ActionType.OPEN_LIST: {
      const { id, title, color, icon } = action.payload;

      return {
        isOpen: true,
        id,
        title,
        color,
        icon,
      };
    }

    case ActionType.CLOSE_LIST: {
      return initialState;
    }

    default: return state;
  }
};

export default reducer;
