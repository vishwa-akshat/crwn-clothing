import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB0tsQfLpWOK1_lx10VHUKGKAfMMpTSVFE",
    authDomain: "crwn-db-b0eb4.firebaseapp.com",
    projectId: "crwn-db-b0eb4",
    storageBucket: "crwn-db-b0eb4.appspot.com",
    messagingSenderId: "58011317766",
    appId: "1:58011317766:web:1c6d90624ad2765e5fb587",
    measurementId: "G-PESZRG0DSC"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

