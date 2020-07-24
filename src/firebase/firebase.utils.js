import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBBgrqKQTK-xsZoxe4cO9OHlU8XftcfFk4",
  authDomain: "crwn-db-69391.firebaseapp.com",
  databaseURL: "https://crwn-db-69391.firebaseio.com",
  projectId: "crwn-db-69391",
  storageBucket: "crwn-db-69391.appspot.com",
  messagingSenderId: "80819967588",
  appId: "1:80819967588:web:b954c076a2ccb6fc0f3171",
  measurementId: "G-WP91ZE2KTH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
