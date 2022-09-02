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
  collection,
  writeBatch,
  query,
  getDocs,
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

// Creates a list of questions for the specified user today
export const addUserQuestions = async (uid, questionsToAdd, date = dateStamp()) => {
  const collectionRef = collection(db, 'rejection');
  const batch = writeBatch(db);
  const docRef = doc(collectionRef, uid);
  const item = { date, questions: [...questionsToAdd] }
  batch.set(docRef, item);
  await batch.commit();
};

// Returns the questions for the specified user for today
export const getUserQuestions = async (uid, date = dateStamp()) => {
  const collectionRef = collection(db, 'rejection');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const questions = querySnapshot.docs.reduce((acc, docsSnapshot) => {
    const data = docsSnapshot.data();
    if (docsSnapshot.id === uid && data.date === date) {
      return acc.concat(data.questions);
    }
    return acc
  }, []);
  return questions;
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const dateStamp = () => new Date(new Date().setHours(0, 0, 0, 0)).toISOString().split('T')[0];