import { firestore, auth } from 'src/firebase';
import firebase from 'firebase';

const initializeUserStore = async ({ email, uid }) => (
  firestore.collection('users').doc(uid).set({
    email,
  })
);

const addNewList = async ({ title, color, icon }) => (
  firestore.collection('lists').add({
    ownerId: auth.currentUser.uid,
    created: firebase.firestore.Timestamp.now(),
    title,
    color,
    icon,
  })
);

const subscribeToListsUpdate = (callback) => {
  const authUserId = auth.currentUser.uid;

  return firestore.collection('lists')
    .where('ownerId', '==', authUserId)
    .orderBy('created', 'desc')
    .onSnapshot(callback);
};

export default {
  initializeUserStore,
  addNewList,
  subscribeToListsUpdate,
};
