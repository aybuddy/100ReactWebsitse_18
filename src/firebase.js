import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBxfg-G-EGW2zLRss5OV719F5F0ZehHwC0',
  authDomain: 'instareels-clone-cp.firebaseapp.com',
  projectId: 'instareels-clone-cp',
  storageBucket: 'instareels-clone-cp.appspot.com',
  messagingSenderId: '780738938412',
  appId: '1:780738938412:web:bc3e499c5b8a854e3cf389',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
