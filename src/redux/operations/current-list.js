import ListApi from 'src/api/list';
import ActionCreator from 'src/redux/actions/current-list';
import { convertDoc } from 'src/utils/helpers/firebase';

const Operation = {
  subscribeToCurrentList: ({ listType, listId }) => async (dispatch) => {
    ListApi.subscribeToCurrentList({ listType, listId }, (snapshot) => {
      try {
        const list = convertDoc(snapshot);

        dispatch(ActionCreator.setCurrentList(list));
      } catch (error) {
        dispatch(ActionCreator.setError(error));
      } finally {
        dispatch(ActionCreator.setLoading(false));
      }
    });
  },
};

export default Operation;
