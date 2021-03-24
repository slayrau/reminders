import ListApi from 'src/api/list';
import ListPropertiesActionCreator from 'src/redux/actions/list-properties';
import UserListsActionCreator from 'src/redux/actions/user-lists';
import { convertDoc } from 'src/utils/helpers/firebase';

const Operation = {
  createList: ({ title, color, icon }, callback) => async (dispatch) => {
    try {
      const response = await ListApi.createList({ title, color, icon });
      callback(response.id);
    } catch (error) {
      console.log('Creating user list error', error);
    } finally {
      dispatch(ListPropertiesActionCreator.closeList());
    }
  },

  updateList: ({ id, title, color, icon }) => (dispatch) => {
    try {
      ListApi.updateList({ id, title, color, icon });
    } catch (error) {
      console.log('Updating list error', error);
    } finally {
      dispatch(ListPropertiesActionCreator.closeList());
    }
  },

  removeList: ({ id, history }) => async (dispatch) => {
    try {
      ListApi.removeList(id);
      history.replace('/');
    } catch (error) {
      console.log('removeList error', error);
    } finally {
      dispatch(ListPropertiesActionCreator.closeList());
    }
  },

  subscribeToListsUpdate: () => (dispatch) => {
    ListApi.subscribeToListsUpdate((snapshot) => {
      try {
        const convertedLists = snapshot.docs.map(convertDoc);

        dispatch(UserListsActionCreator.setUserLists(convertedLists));
      } catch (error) {
        dispatch(UserListsActionCreator.setError(error));
      } finally {
        dispatch(UserListsActionCreator.setLoading(false));
      }
    });
  },
};

export default Operation;
