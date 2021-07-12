import firebase from "firebase";
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyD1mi9PpdhKcZwxXnerdyRE7Ga5EmaMFaM",
    authDomain: "chatter-v-1.firebaseapp.com",
    projectId: "chatter-v-1",
    storageBucket: "chatter-v-1.appspot.com",
    messagingSenderId: "624296066906",
    appId: "1:624296066906:web:f92bbbc83f5d258c94fd63"
  };

  const app = !firebase.apps.length ? 
                firebase.initializeApp(firebaseConfig)
                :
                firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db, storage};