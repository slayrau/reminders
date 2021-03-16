import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCDuAn-ZlsvXEzQ-4jcUMMUw8nyW1kJaqg',
  authDomain: 'reminders-9ce6d.firebaseapp.com',
  projectId: 'reminders-9ce6d',
  storageBucket: 'reminders-9ce6d.appspot.com',
  messagingSenderId: '70791177512',
  appId: '1:70791177512:web:9e55585e3e51701dcadc1d',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {
  auth,
};
