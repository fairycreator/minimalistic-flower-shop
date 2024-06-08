import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC6WzxrYxzW9Jza68KOMFlcouWeNPp0n_A",
  authDomain: "flower-shop-aeb86.firebaseapp.com",
  projectId: "flower-shop-aeb86",
  storageBucket: "flower-shop-aeb86.appspot.com",
  messagingSenderId: "499063964194",
  appId: "1:499063964194:web:c35ee1cd741c972c51007b",
  measurementId: "G-DYBDMZSBEJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
