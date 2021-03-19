import { useState } from 'react';

import reminders from 'src/mocks/reminders';

import Collection from 'src/components/collection';

// OWN
import Header from './components/header';
import Reminder from './components/reminder';
import './style.scss';

const RemindersPage = () => {
  const [editableReminderId, setEditableReminderId] = useState(null);

  const handleCancel = () => {
    setEditableReminderId(null);
  };

  return (
    <div className="reminders-page">
      <Header
        title="Hello world"
        count={42}
      />

      <Collection title="Reminders" titleHidden>
        {reminders.map((reminder) => (
          <Reminder
            key={reminder.id}
            id={reminder.id}
            text={reminder.text}
            completed={reminder.completed}
            editing={reminder.id === editableReminderId}
            onEdit={() => setEditableReminderId(reminder.id)}
            onCancel={handleCancel}
          />
        ))}
      </Collection>
    </div>
  );
};

export default RemindersPage;
