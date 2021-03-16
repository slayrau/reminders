import { auth } from 'src/firebase';

const signUp = (email, password) => (
  auth.createUserWithEmailAndPassword(email, password)
);

const signIn = (email, password) => (
  auth.signInWithEmailAndPassword(email, password)
);

const signOut = () => (
  auth.signOut()
);

const onAuthStateChanged = (callback) => (
  auth.onAuthStateChanged(callback)
);

export default {
  signIn,
  signUp,
  signOut,
  onAuthStateChanged,
};
