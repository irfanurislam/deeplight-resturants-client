// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8qNjmbDKCfa7KqNxESH7D03m_mhWsI0g",
  authDomain: "deeplight-resturants.firebaseapp.com",
  projectId: "deeplight-resturants",
  storageBucket: "deeplight-resturants.appspot.com",
  messagingSenderId: "659903139700",
  appId: "1:659903139700:web:d87c833fc91278158be621",
  measurementId: "G-ZDH9737JDH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);