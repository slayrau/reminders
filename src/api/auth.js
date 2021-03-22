import { firestore, auth } from 'src/firebase';

export default {
  signUp: ({ email, password }) => (
    auth.createUserWithEmailAndPassword(email, password)
  ),

  signIn: ({ email, password }) => (
    auth.signInWithEmailAndPassword(email, password)
  ),

  signOut: () => (
    auth.signOut()
  ),

  initializeUserStore: async ({ email, uid }) => (
    firestore.collection('users').doc(uid).set({
      email,
    })
  ),

  checkUserSigned: () => (
    auth.getRedirectResult().then(() => auth.currentUser)
  ),

  updateName: (name) => (
    auth.currentUser.updateProfile({
      displayName: name,
    })
  ),
};
