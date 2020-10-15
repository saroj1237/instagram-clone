import firebase from 'firebase';
var firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyD62CMIKZGNDJGOTtnOsbj1AWlgQ-vqa_o",
  authDomain: "instagram-clone-18eed.firebaseapp.com",
  databaseURL: "https://instagram-clone-18eed.firebaseio.com",
  projectId: "instagram-clone-18eed",
  storageBucket: "instagram-clone-18eed.appspot.com",
  messagingSenderId: "215487348066",
  appId: "1:215487348066:web:57cc2e25893f8ab76a003b",
  measurementId: "G-L0RVQQKQYN",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
