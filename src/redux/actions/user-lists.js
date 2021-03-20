import ActionType from 'src/redux/types/user-lists';

const ActionCreator = {
  setUserLists: (lists) => ({
    type: ActionType.SET_USER_LISTS,
    payload: lists,
  }),

  setLoading: (loading) => ({
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
