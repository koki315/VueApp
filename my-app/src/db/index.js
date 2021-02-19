import firebase from "firebase";

const  firebaseConfig = {
  apiKey: "AIzaSyDwuvmtkHzQoZZpwVAEf8frHPErqTH2rpA",
  authDomain: "vuebulletinboard.firebaseapp.com",
  projectId: "vuebulletinboard",
  storageBucket: "vuebulletinboard.appspot.com",
  messagingSenderId: "365149513487",
  appId: "1:365149513487:web:6f5b12999eec0f3c26007a",
  measurementId: "G-65RXQDL971"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default  db
export const datas =  db.collection("messages")