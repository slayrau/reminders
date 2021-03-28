import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

// REDUX
import ListPropertiesActionCreator from 'src/redux/actions/list-properties';
import CurrentListOperation from 'src/redux/operations/current-list';
import CurrentListActionCreator from 'src/redux/actions/current-list';
import CurrentListSelector from 'src/redux/selectors/current-list';
import RemindersOperation from 'src/redux/operations/reminders';
import RemindersActionCreator from 'src/redux/actions/reminders';
import RemindersSelector from 'src/redux/selectors/reminders';

const useRemindersPage = () => {
  const { listType, listId } = useParams();
  const currentList = useSelector(CurrentListSelector.currentList);
  const reminders = useSelector(RemindersSelector.reminders);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddReminder = () => {
    dispatch(RemindersActionCreator.addReminder());
  };

  const handleEditReminder = (id) => {
    dispatch(RemindersActionCreator.removeReminder('NEW_REMINDER'));
    dispatch(RemindersActionCreator.setEditableId(id));
  };

  const handleRemoveReminder = (id) => {
    dispatch(RemindersOperation.removeReminder({ listType, listId, id }));
  };

  const handleCancel = (id) => {
    if (id === 'NEW_REMINDER') {
      dispatch(RemindersActionCreator.removeReminder(id));
    }

    dispatch(RemindersActionCreator.setEditableId(null));
  };

  const handleSubmit = ({ id, text, completed }) => {
    dispatch(RemindersOperation.setReminder({ listType, listId, id, text, completed }));
  };

  const handleListEdit = () => {
    const { id, title, color, icon } = currentList.data;

    dispatch(ListPropertiesActionCreator.editCurrentList({
      id,
      title,
      color,
      icon,
    }));
  };

  const handleBackward = () => {
    history.replace('/');
  };

  useEffect(() => {
    dispatch(CurrentListOperation.subscribeToCurrentList({ listType, listId }));
    dispatch(RemindersOperation.subscribeToRemindersByList({ listType, listId }));

    return () => {
      dispatch(CurrentListActionCreator.reset());
      dispatch(RemindersActionCreator.reset());
    };
  }, [dispatch, listType, listId]);

  return {
    currentList,
    reminders,
    handleAddReminder,
    handleEditReminder,
    handleRemoveReminder,
    handleCancel,
    handleSubmit,
    handleListEdit,
    handleBackward,
  };
};

export default useRemindersPage;
