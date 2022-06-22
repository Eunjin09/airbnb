import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBopPCSge0pf3PvWAMVJgkz_zmb_cz3eK8",
  authDomain: "sparta-react-basic-a3d91.firebaseapp.com",
  projectId: "sparta-react-basic-a3d91",
  storageBucket: "sparta-react-basic-a3d91.appspot.com",
  messagingSenderId: "320412729298",
  appId: "1:320412729298:web:7c4a3d5aabbf00e816120b",
  measurementId: "G-FDTWJVP5Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
