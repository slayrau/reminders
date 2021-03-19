import ActionType from 'src/redux/types/current-list';

const ActionCreator = {
  setCurrentList: (list) => ({
    type: ActionType.SET_CURRENT_LIST,
    payload: list,
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
