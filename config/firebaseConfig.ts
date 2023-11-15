// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWlAQ8Pv69KlHmn5fAvkBz-N-mBbQPY9s",
  authDomain: "fir-chat-a36b9.firebaseapp.com",
  projectId: "fir-chat-a36b9",
  storageBucket: "fir-chat-a36b9.appspot.com",
  messagingSenderId: "1023972015036",
  appId: "1:1023972015036:web:cf8702fde5a863319989b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const storage = getStorage(app)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});