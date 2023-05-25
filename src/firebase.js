import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCowZ2vMpqd7jedtigR9x9PNml47M6Q-OU",
  authDomain: "sharpener-expense-tracker.firebaseapp.com",
  projectId: "sharpener-expense-tracker",
  storageBucket: "sharpener-expense-tracker.appspot.com",
  messagingSenderId: "750931945211",
  appId: "1:750931945211:web:3b93bfaee7af7a7e21325e",
  measurementId: "G-5B75WK2PRV"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
