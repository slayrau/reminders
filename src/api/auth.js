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

const checkUserSigned = () => (
  auth.getRedirectResult().then(() => auth.currentUser)
);

export default {
  signIn,
  signUp,
  signOut,
  checkUserSigned,
};
