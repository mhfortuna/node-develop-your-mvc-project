import firebase from "firebase/compat/app";
import "firebase/compat/auth";

if (!firebase.apps.length) {
  // Paste your config object here ⬇️
  // const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_APP_ID,
  // };

  const firebaseConfig = {
    apiKey: "AIzaSyCm05UtAadXw92Lj9RDoDtVuIqK-hquWfs",
    authDomain: "the-camera-project.firebaseapp.com",
    projectId: "the-camera-project",
    storageBucket: "the-camera-project.appspot.com",
    messagingSenderId: "571108380529",
    appId: "1:571108380529:web:aa1335f3a8591bc3cc70d0",
    measurementId: "G-YCZTVE6DE7",
  };

  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

export const auth = firebase.auth();

export function onAuthStateChanged(...props) {
  return auth.onAuthStateChanged(...props);
}

export function signInWithGoogle() {
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(GoogleAuthProvider);
}

export function signInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signUpWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
  return auth.sendPasswordResetEmail(email);
}

export function signOut() {
  return auth.signOut();
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
}

export function getCurrentUserEmail() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.email;
}
