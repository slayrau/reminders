import FirestoreApi from 'src/api/firestore';
import ListPropertiesActionCreator from 'src/redux/actions/list-properties';
import UserListsActionCreator from 'src/redux/actions/user-lists';
import { convertDoc } from 'src/utils/helpers/firebase';

const Operation = {
  addNewList: ({ title, color, icon }) => (dispatch) => {
    try {
      FirestoreApi.addNewList({ title, color, icon });
    } catch (error) {
      console.log('error:', error);
    } finally {
      dispatch(ListPropertiesActionCreator.close());
    }
  },

  subscribeToListsUpdate: () => (dispatch) => {
    FirestoreApi.subscribeToListsUpdate((doc) => {
      const convertedLists = doc.docs.map(convertDoc);

      dispatch(UserListsActionCreator.setUserLists(convertedLists));
    });
  },
};

export default Operation;
