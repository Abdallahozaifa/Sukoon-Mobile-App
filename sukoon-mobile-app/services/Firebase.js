// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCcMngNIdnD5TCHiyoRCdFwxlPovPghRg4',
  authDomain: 'sukoon-ae00e.firebaseapp.com',
  projectId: 'sukoon-ae00e',
  storageBucket: 'sukoon-ae00e.appspot.com',
  messagingSenderId: '284645086199',
  appId: '1:284645086199:web:22fd06cfb6a80c30bf54f2',
  measurementId: 'G-35HVD98Y63'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
