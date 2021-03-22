import ActionType from 'src/redux/types/auth';

const initialState = {
  data: {
    name: '',
    email: '',
    photo: '',
  },
  authorized: false,
  authLoading: false,
  dataUpdating: false,
  photoUpdating: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_DATA: {
      const { name, email, photo } = action.payload;

      return {
        ...state,
        data: { name, email, photo },
      };
    }

    case ActionType.SET_AUTHORIZED: {
      return {
        ...state,
        authorized: action.payload,
      };
    }

    case ActionType.SET_AUTH_LOADING: {
      return {
        ...state,
        authLoading: action.payload,
      };
    }

    case ActionType.UPDATE_NAME: {
      return {
        ...state,
        data: { ...state.data, name: action.payload },
      };
    }

    case ActionType.SET_DATA_UPDATING: {
      return {
        ...state,
        dataUpdating: action.payload,
      };
    }

    case ActionType.UPDATE_PHOTO: {
      return {
        ...state,
        data: { ...state.data, photo: action.payload },
      };
    }

    case ActionType.SET_PHOTO_UPDATING: {
      return {
        ...state,
        photoUpdating: action.payload,
      };
    }

    case ActionType.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case ActionType.RESET_AUTH_DATA: {
      return initialState;
    }

    default: return state;
  }
};

export default reducer;
