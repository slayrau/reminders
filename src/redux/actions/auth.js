import ActionType from 'src/redux/types/auth';

const ActionCreator = {
  setAuthData: ({ name, email, photo }) => ({
    type: ActionType.SET_AUTH_DATA,
    payload: { name, email, photo },
  }),

  setAuthLoading: (loading) => ({
    type: ActionType.SET_AUTH_LOADING,
    payload: loading,
  }),

  setAuthorized: (status) => ({
    type: ActionType.SET_AUTHORIZED,
    payload: status,
  }),

  updateName: (name) => ({
    type: ActionType.UPDATE_NAME,
    payload: name,
  }),

  setDataUpdating: (status) => ({
    type: ActionType.SET_DATA_UPDATING,
    payload: status,
  }),

  updatePhoto: (photo) => ({
    type: ActionType.UPDATE_PHOTO,
    payload: photo,
  }),

  setPhotoUpdating: (status) => ({
    type: ActionType.SET_PHOTO_UPDATING,
    payload: status,
  }),

  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: error,
  }),

  resetAuthData: () => ({
    type: ActionType.RESET_AUTH_DATA,
  }),
};

export default ActionCreator;
