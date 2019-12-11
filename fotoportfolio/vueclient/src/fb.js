import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
  apiKey: "AIzaSyC2Um93EnlV3LeQbpL4Bvaz3SOJFH2iHQs",
  authDomain: "fotoportfolio-8581c.firebaseapp.com",
  databaseURL: "https://fotoportfolio-8581c.firebaseio.com",
  projectId: "fotoportfolio-8581c",
  storageBucket: "fotoportfolio-8581c.appspot.com",
  messagingSenderId: "72832179434"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
