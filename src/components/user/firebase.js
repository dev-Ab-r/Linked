import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA99BueZjq82UduW400KYjFZK4E0I3xXuw",
    authDomain: "linked-694e7.firebaseapp.com",
    projectId: "linked-694e7",
    storageBucket: "linked-694e7.appspot.com",
    messagingSenderId: "418566538246",
    appId: "1:418566538246:web:3687b8f0992c0d462f2f87",
    measurementId: "G-73FTE3QCQL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider}
  export default db;