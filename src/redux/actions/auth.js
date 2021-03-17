import ActionType from 'src/redux/types/auth';

const ActionCreator = {
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user,
  }),

  setLoading: (loading) => ({
    type: ActionType.SET_LOADING,
    payload: loading,
  }),

  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: error,
  }),

  resetAuth: () => ({
    type: ActionType.RESET_AUTH,
  }),
};

export default ActionCreator;
