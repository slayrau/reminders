import AuthApi from 'src/api/auth';
import StorageApi from 'src/api/storage';
import AuthActionCreator from 'src/redux/actions/auth';
import ActionCreator from 'src/redux/actions/profile-properties';

const Operation = {
  signIn: ({ email, password }) => async (dispatch) => {
    try {
      dispatch(AuthActionCreator.setAuthLoading(true));

      const { user } = await AuthApi.signIn({ email, password });

      dispatch(AuthActionCreator.setAuthData({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }));

      dispatch(AuthActionCreator.setAuthorized(true));
    } catch (error) {
      dispatch(AuthActionCreator.setError(error));
    } finally {
      dispatch(AuthActionCreator.setAuthLoading(false));
    }
  },

  signUp: ({ email, password }) => async (dispatch) => {
    try {
      dispatch(AuthActionCreator.setAuthLoading(true));

      const { user } = await AuthApi.signUp({ email, password });

      dispatch(AuthActionCreator.setAuthData({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }));

      dispatch(AuthActionCreator.setAuthorized(true));
    } catch (error) {
      dispatch(AuthActionCreator.setError(error));
    } finally {
      dispatch(AuthActionCreator.setAuthLoading(false));
    }
  },

  signOut: () => (dispatch) => {
    AuthApi.signOut();
    dispatch(AuthActionCreator.resetAuthData());
  },

  checkUserSigned: () => async (dispatch) => {
    try {
      dispatch(AuthActionCreator.setAuthLoading(true));

      const user = await AuthApi.checkUserSigned();

      // User is signed in.
      if (user) {
        dispatch(AuthActionCreator.setAuthData({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }));

        dispatch(AuthActionCreator.setAuthorized(true));
      }
    } catch (error) {
      dispatch(AuthActionCreator.setError(error));
    } finally {
      dispatch(AuthActionCreator.setAuthLoading(false));
    }
  },

  updateProfile: ({ name, email }) => async (dispatch) => {
    try {
      dispatch(AuthActionCreator.setDataUpdating(true));
      await AuthApi.updateName(name);
      dispatch(AuthActionCreator.updateName(name));
    } catch (error) {
      dispatch(AuthActionCreator.setError(error));
    } finally {
      dispatch(AuthActionCreator.setDataUpdating(false));
    }
  },

  updatePhoto: (filePicture) => async (dispatch) => {
    try {
      dispatch(AuthActionCreator.setPhotoUpdating(true));
      const photoUrl = await StorageApi.updatePhoto(filePicture);
      dispatch(AuthActionCreator.updatePhoto(photoUrl));
    } catch (error) {
      dispatch(ActionCreator.setError(AuthActionCreator.setError(error)));
    } finally {
      dispatch(AuthActionCreator.setPhotoUpdating(false));
    }
  },

  removePhoto: () => (dispatch) => {
    try {
      StorageApi.removePhoto();
      dispatch(AuthActionCreator.updatePhoto(''));
    } catch (error) {
      dispatch(AuthActionCreator.setError(error));
    }
  },
};

export default Operation;
