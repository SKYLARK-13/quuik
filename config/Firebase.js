import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDIIBZrVLnr7ny4qGZlWkYj46LE3xZjPfg',
  authDomain: 'quuik-d5baa.firebaseapp.com',
  projectId: 'quuik-d5baa',
  storageBucket: 'quuik-d5baa.appspot.com',
  messagingSenderId: '66359051646',
  appId: '1:66359051646:web:9de0755e2d6fc1950f5f2f',
};

const Firebase = firebase.initializeApp(firebaseConfig);

// export const db = firebase.firestore();
// db.settings({
//   timestampsInSnapshots: true,
// });
firebase.firestore().settings({experimentalForceLongPolling: true});
export const db = Firebase.firestore();

export default Firebase;
