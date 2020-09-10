import *as firebase from "firebase"
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyAFrX4XxSfJTfHYsqxlqoubDaQwo-f40jo",
    authDomain: "wily-69ad8.firebaseapp.com",
    databaseURL: "https://wily-69ad8.firebaseio.com",
    projectId: "wily-69ad8",
    storageBucket: "wily-69ad8.appspot.com",
    messagingSenderId: "921533883942",
    appId: "1:921533883942:web:4d1cbdc0a62ef5c89328e7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();