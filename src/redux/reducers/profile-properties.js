import ActionType from 'src/redux/types/profile-properties';

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_PROFILE: {
      return {
        isOpen: true,
      };
    }

    case ActionType.CLOSE_PROFILE: {
      return initialState;
    }

    default: return state;
  }
};

export default reducer;
