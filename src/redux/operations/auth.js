import AuthApi from 'src/api/auth';
import FirestoreApi from 'src/api/firestore';
import ActionCreator from 'src/redux/actions/auth';

const Operation = {
  checkUserSigned: () => async (dispatch) => {
    try {
      dispatch(ActionCreator.setLoading(true));
      const user = await AuthApi.checkUserSigned();
      // User is signed in.
      if (user) dispatch(ActionCreator.setUser(user));
    } catch (error) {
      dispatch(ActionCreator.setError(error));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },

  signIn: (email, password) => async (dispatch) => {
    try {
      dispatch(ActionCreator.setLoading(true));
      const response = await AuthApi.signIn(email, password);
      dispatch(ActionCreator.setUser(response.user));
    } catch (error) {
      dispatch(ActionCreator.setError(error));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },

  signUp: (email, password) => async (dispatch) => {
    try {
      dispatch(ActionCreator.setLoading(true));
      const response = await AuthApi.signUp(email, password);
      await FirestoreApi.initializeUserStore(response.user);
      dispatch(ActionCreator.setUser(response.user));
    } catch (error) {
      dispatch(ActionCreator.setError(error));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },

  signOut: () => (dispatch) => {
    AuthApi.signOut();

    dispatch(ActionCreator.resetAuth());
  },
};

export default Operation;
