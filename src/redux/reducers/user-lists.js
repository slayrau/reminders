import ActionType from 'src/redux/types/user-lists';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER_LISTS: {
      return {
        data: action.payload,
      };
    }

    default: return state;
  }
};

export default reducer;
