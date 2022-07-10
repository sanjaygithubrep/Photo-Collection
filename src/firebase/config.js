import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEPkHo7rrucMW-r3CV_pgV_o0aYJmqCjY",
  authDomain: "photo-album-6af18.firebaseapp.com",
  projectId: "photo-album-6af18",
  storageBucket: "photo-album-6af18.appspot.com",
  messagingSenderId: "260790761572",
  appId: "1:260790761572:web:3d3fd7b1cb1ff5d88f8771"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };