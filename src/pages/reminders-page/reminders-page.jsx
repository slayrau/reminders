import classNames from 'classnames';

// UTILS
import { SystemIconNames } from 'src/utils/const';

// HOOKS
import useRemindersPage from 'src/hooks/use-reminders-page';

// CONTEXT
import { useMediaContext } from 'src/contexts/media';

// COMPONENTS
import IconButton from 'src/components/icon-button';
import Collection from 'src/components/collection';

// OWN
import Header from './components/header';
import Reminder from './components/reminder';
import './style.scss';

const RemindersPage = () => {
  const {
    currentList,
    reminders,
    handleAddReminder,
    handleEditReminder,
    handleRemoveReminder,
    handleCancel,
    handleSubmit,
    handleListEdit,
    handleBackward,
  } = useRemindersPage();

  const isSmallMedia = useMediaContext();

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
            onEdit={() => handleEditReminder(reminder.id)}
            onCancel={() => handleCancel(reminder.id)}
            onSubmit={handleSubmit}
            onRemove={() => handleRemoveReminder(reminder.id)}
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
