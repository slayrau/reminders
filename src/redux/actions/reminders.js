import ActionType from 'src/redux/types/reminders';

const ActionCreator = {
  addReminder: () => ({
    type: ActionType.ADD_REMINDER,
    payload: {
      id: 'NEW_REMINDER',
      text: '',
      completed: false,
    },
  }),

  removeReminder: (id) => ({
    type: ActionType.REMOVE_REMINDER,
    payload: id,
  }),

  setEditableId: (id) => ({
    type: ActionType.SET_EDITABLE_ID,
    payload: id,
  }),

  setReminders: (reminders) => ({
    type: ActionType.SET_REMINDERS,
    payload: reminders,
  }),

  setLoding: (loading) => ({
    type: ActionType.SET_LOADING,
    payload: loading,
  }),

  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: error,
  }),

  reset: () => ({
    type: ActionType.RESET,
  }),
};

export default ActionCreator;
