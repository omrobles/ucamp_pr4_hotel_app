import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWCgndtixHOJcMkFavUsALpqv6HPwBZ6I",
  authDomain: "hotel-app-12301.firebaseapp.com",
  projectId: "hotel-app-12301",
  storageBucket: "hotel-app-12301.appspot.com",
  messagingSenderId: "648305765098",
  appId: "1:648305765098:web:08e48ce75790bbeceac593",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
