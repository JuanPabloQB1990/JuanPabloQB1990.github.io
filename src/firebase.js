import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0vNpXm7_pzatbbf9GS4_Q-NXZPaTDOIk",
  authDomain: "portafolio-ecb78.firebaseapp.com",
  databaseURL:"https://portafolio-ecb78.firebaseio.com",
  projectId: "portafolio-ecb78",
  storageBucket: "portafolio-ecb78.appspot.com",
  messagingSenderId: "81719346742",
  appId: "1:81719346742:web:c1a999b343a6a3ff5dfa97"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth()

  export {db,auth, firebase}
