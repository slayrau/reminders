import { firestore } from 'src/firebase';
import firebase from 'firebase';

export default {
  createReminder: async ({ listType, listId, text, completed }) => {
    const { id } = await firestore.collection('reminders').add({
      created: firebase.firestore.Timestamp.now(),
      listId,
      text,
      completed,
    });

    firestore.collection('lists').doc(listId).update({
      reminderIds: firebase.firestore.FieldValue.arrayUnion(id),
    });
  },

  updateReminder: ({ id, text, completed }) => (
    firestore.collection('reminders')
      .doc(id)
      .update({
        text,
        completed,
      })
  ),

  removeReminder: ({ listType, listId, id }) => {
    firestore.collection('lists').doc(listId).update({
      reminderIds: firebase.firestore.FieldValue.arrayRemove(id),
    });

    firestore.collection('reminders')
      .doc(id)
      .delete();
  },

  subscribeToRemindersByList: ({ listType, listId }, callback) => {
    firestore.collection('reminders')
      .where('listId', '==', listId)
      .orderBy('created', 'asc')
      .onSnapshot(callback);
  },
};
