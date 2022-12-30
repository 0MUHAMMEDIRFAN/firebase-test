import firebase from "firebase/compat/app"

const firebaseConfig = {
  apiKey: "AIzaSyCo89pWLVdSN28MpRn5RNhmUG47GqguDaA",
  authDomain: "test-19553.firebaseapp.com",
  projectId: "test-19553",
  storageBucket: "test-19553.appspot.com",
  messagingSenderId: "108338846931",
  appId: "1:108338846931:web:88113df0acb3db953a8826",
  measurementId: "G-BP58W4TT03"
};

export const Firebase = firebase.initializeApp(firebaseConfig)
