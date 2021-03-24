import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import classNames from 'classnames';

// UTILS
import { SystemIconNames } from 'src/utils/const';

// CONTEXT
import { useMediaContext } from 'src/contexts/media';

// REDUX
import ListPropertiesActionCreator from 'src/redux/actions/list-properties';
import CurrentListOperation from 'src/redux/operations/current-list';
import CurrentListActionCreator from 'src/redux/actions/current-list';
import CurrentListSelector from 'src/redux/selectors/current-list';
import RemindersOperation from 'src/redux/operations/reminders';
import RemindersActionCreator from 'src/redux/actions/reminders';
import RemindersSelector from 'src/redux/selectors/reminders';

// COMPONENTS
import IconButton from 'src/components/icon-button';
import Collection from 'src/components/collection';

// OWN
import Header from './components/header';
import Reminder from './components/reminder';
import './style.scss';

const RemindersPage = () => {
  const { listType, listId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const isSmallMedia = useMediaContext();
  const currentList = useSelector(CurrentListSelector.currentList);
  const reminders = useSelector(RemindersSelector.reminders);

  const handleBackward = () => {
    history.replace('/');
  };

  const handleAddReminder = () => {
    dispatch(RemindersActionCreator.addReminder());
  };

  const handleReminderEdit = (id) => {
    dispatch(RemindersActionCreator.removeReminder('NEW_REMINDER'));
    dispatch(RemindersActionCreator.setEditableId(id));
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

  const handleRemove = (id) => {
    dispatch(RemindersOperation.removeReminder({ listType, listId, id }));
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

  useEffect(() => {
    dispatch(CurrentListOperation.subscribeToCurrentList({ listType, listId }));
    dispatch(RemindersOperation.subscribeToRemindersByList({ listType, listId }));

    return () => {
      dispatch(CurrentListActionCreator.reset());
      dispatch(RemindersActionCreator.reset());
    };
  }, [dispatch, listType, listId]);

  if (currentList.loading || reminders.loading) return null;

  return (
    <div className={classNames('reminders-page', `system-color--${currentList.data.color}`)}>
      <Header
        title={currentList.data.title}
        count={currentList.data.reminderIds?.length || 0}
        icon={currentList.data.icon}
        onBackward={handleBackward}
        onListEdit={handleListEdit}
        onAddReminder={handleAddReminder}
        isSmallMedia={isSmallMedia}
      />

      <Collection title="Reminders" titleHidden>
        {reminders.data.map((reminder) => (
          <Reminder
            key={reminder.id}
            id={reminder.id}
            text={reminder.text}
            completed={reminder.completed}
            editing={reminder.id === reminders.editableId}
            onEdit={() => handleReminderEdit(reminder.id)}
            onCancel={() => handleCancel(reminder.id)}
            onSubmit={handleSubmit}
            onRemove={() => handleRemove(reminder.id)}
          />
        ))}
      </Collection>

      <IconButton
        className="reminders-page__add-reminder-button"
        icon={SystemIconNames.plus}
        aria-label="Add reminder"
        onClick={handleAddReminder}
      />
    </div>
  );
};

export default RemindersPage;
