import { firestore, auth } from 'src/firebase';
import firebase from 'firebase';

export default {
  createList: ({ title, color, icon }) => (
    firestore.collection('lists').add({
      ownerId: auth.currentUser.uid,
      created: firebase.firestore.Timestamp.now(),
      title,
      color,
      icon,
    })
  ),

  updateList: ({ id, title, color, icon }) => (
    firestore.collection('lists')
      .doc(id)
      .update({
        title,
        color,
        icon,
      })
  ),

  removeList: (id) => {
    firestore.collection('lists').doc(id).delete();
    firestore.collection('reminders')
      .where('listId', '==', id)
      .get()
      .then((snapshot) => {
        snapshot.forEach((reminder) => reminder.ref.delete());
      });
  },

  subscribeToCurrentList: ({ listType, listId }, callback) => (
    firestore.collection('lists').doc(listId).onSnapshot(callback)
  ),

  subscribeToListsUpdate: (callback) => (
    firestore.collection('lists')
      .where('ownerId', '==', auth.currentUser.uid)
      .orderBy('created', 'asc')
      .onSnapshot(callback)
  ),
};
