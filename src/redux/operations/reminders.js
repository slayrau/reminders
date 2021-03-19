import RemindersApi from 'src/api/reminders';
import ActionCreator from 'src/redux/actions/reminders';
import { convertDoc } from 'src/utils/helpers/firebase';

const Operation = {
  setReminder: ({ listType, listId, id, text, completed }) => async (dispatch) => {
    try {
      if (id === 'NEW_REMINDER' && text) {
        await RemindersApi.createReminder({ listType, listId, text, completed });
      }

      if (id === 'NEW_REMINDER' && !text) {
        dispatch(ActionCreator.removeReminder(id));
      }

      if (id !== 'NEW_REMINDER' && text) {
        await RemindersApi.updateReminder({ id, text, completed });
      }

      if (id !== 'NEW_REMINDER' && !text) {
        dispatch(RemindersApi.removeReminder({ listType, listId, id }));
      }
    } catch (error) {
      dispatch(ActionCreator.setError(error));
    } finally {
      dispatch(ActionCreator.setEditableId(null));
    }
  },

  removeReminder: ({ listType, listId, id }) => async (dispatch) => {
    try {
      RemindersApi.removeReminder({ listType, listId, id });
    } catch (error) {
      dispatch(ActionCreator.setError(error));
    } finally {
      dispatch(ActionCreator.setEditableId(null));
    }
  },

  subscribeToRemindersByList: ({ listType, listId }) => async (dispatch) => {
    RemindersApi.subscribeToRemindersByList({ listType, listId }, (snapshot) => {
      try {
        const reminders = snapshot.docs.map(convertDoc);

        dispatch(ActionCreator.setReminders(reminders));
      } catch (error) {
        dispatch(ActionCreator.setError(error));
      } finally {
        dispatch(ActionCreator.setLoding(false));
      }
    });
  },
};

export default Operation;
