import * as firebase from "firebase/app";
import 'firebase/storage';
import'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDo2UD7IeaCvCbKNSITsvehE1OMAYIFNzo",
  authDomain: "myphoto-b5bc4.firebaseapp.com",
  projectId: "myphoto-b5bc4",
  storageBucket: "myphoto-b5bc4.appspot.com",
  messagingSenderId: "246462223939",
  appId: "1:246462223939:web:0f14df8015555dd72866f6",
  measurementId: "G-8PR7EEJNXC"
};
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage,timestamp};