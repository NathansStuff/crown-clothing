import { initializeApp } from 'firebase/app';
import {
  getAuth,
  singInWithRedirect,
  singInWithPopup,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC2ym9cNY3r0Tms3_X1eqPx9mFWFuaOqjI',
  authDomain: 'crown-clothing-71268.firebaseapp.com',
  databaseURL: 'https://crown-clothing-71268-default-rtdb.firebaseio.com',
  projectId: 'crown-clothing-71268',
  storageBucket: 'crown-clothing-71268.appspot.com',
  messagingSenderId: '246585212474',
  appId: '1:246585212474:web:0fa2a8f9fcc2d472ec3f03',
  measurementId: 'G-PH9GSW4RBY',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user does not exist, create the new user
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating user' + error);
    }
  }

  // return user
  return userDocRef;
};
