import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJvJ_N_Cxf9H-03l23nm0bQttKPe6kTZ8",
    authDomain: "facebook-clone-9dd30.firebaseapp.com",
    projectId: "facebook-clone-9dd30",
    storageBucket: "facebook-clone-9dd30.appspot.com",
    messagingSenderId: "324108241258",
    appId: "1:324108241258:web:3a2afe0a0d6260cd403d13",
    measurementId: "G-QB2QD6FCGQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =  firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;