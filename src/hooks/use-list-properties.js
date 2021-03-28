import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// REDUX
import Selector from 'src/redux/selectors/list-properties';
import ActionCreator from 'src/redux/actions/list-properties';
import Operation from 'src/redux/operations/user-lists';

const useListProperties = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const properties = useSelector(Selector.listProperties);

  const handleCancel = () => {
    dispatch(ActionCreator.closeList());
  };

  const handleSubmit = ({ id, title, color, icon }) => {
    if (id === 'NEW_LIST') {
      dispatch(Operation.createList({
        title,
        color,
        icon,
      }, (listId) => history.push(`/list/${listId}`)));
    } else {
      dispatch(Operation.updateList({
        id,
        title,
        color,
        icon,
      }));
    }
  };

  const handleRemoveList = () => {
    dispatch(Operation.removeList({
      id: properties.id,
      history,
    }));
  };

  return {
    properties,
    handleCancel,
    handleSubmit,
    handleRemoveList,
  };
};

export default useListProperties;
