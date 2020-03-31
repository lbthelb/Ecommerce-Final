import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAi4bY7VVfyDwRSHLE2A8JBf2jXi1nvfFw",
    authDomain: "crown-dd.firebaseapp.com",
    databaseURL: "https://crown-dd.firebaseio.com",
    projectId: "crown-dd",
    storageBucket: "crown-dd.appspot.com",
    messagingSenderId: "186258054928",
    appId: "1:186258054928:web:f22bef7c12e2306bb8cf95",
    measurementId: "G-YLB198K8HW"
  };

  firebase.initializeApp(config); 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 