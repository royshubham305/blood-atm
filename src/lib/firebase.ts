import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAT-NzXL2bA3Zr3u-QqMI5plZ9n1XKDoeM",
  authDomain: "blood-atm-82819.firebaseapp.com",
  databaseURL: "https://blood-atm-82819-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blood-atm-82819",
  storageBucket: "blood-atm-82819.appspot.com",
  messagingSenderId: "391194856244",
  appId: "1:391194856244:web:82027bfa5d5fe256b4b361"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);