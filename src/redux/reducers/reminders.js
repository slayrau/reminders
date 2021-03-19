import ActionType from 'src/redux/types/reminders';

const initialState = {
  editableId: null,
  data: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REMINDER: {
      const isNewReminderEditingExist = state.editableId === 'NEW_REMINDER';

      if (isNewReminderEditingExist) {
        return state;
      }

      return {
        ...state,
        data: [...state.data, action.payload],
        editableId: 'NEW_REMINDER',
      };
    }

    case ActionType.REMOVE_REMINDER: {
      const filteredReminders = state.data.filter((reminder) => reminder.id !== action.payload);

      return {
        ...state,
        data: [...filteredReminders],
      };
    }

    case ActionType.SET_EDITABLE_ID: {
      return {
        ...state,
        editableId: action.payload,
      };
    }

    case ActionType.SET_REMINDERS: {
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
