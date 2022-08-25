import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPmZ3WdPL43RfmyzSRL4UdxGtnbAiirGs",
  authDomain: "rejection-1d5bc.firebaseapp.com",
  projectId: "rejection-1d5bc",
  storageBucket: "rejection-1d5bc.appspot.com",
  messagingSenderId: "623695836625",
  appId: "1:623695836625:web:5348f3af6850262f695cf0",
  measurementId: "G-ZNVRVVN3K4"
};

try {
  initializeApp(firebaseConfig);
} catch (error) {
  console.log(error);
}

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, photoURL, createdAt })
    } catch (error) {
      console.log('error creating user', error)
    }
  }
  return userDocRef;
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
