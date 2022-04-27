 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyDlYDM11bmroarJKPx00q_RAI1RIDWGkvg",
  authDomain: "pora-9f7e2.firebaseapp.com",
  projectId: "pora-9f7e2",
  storageBucket: "pora-9f7e2.appspot.com",
  messagingSenderId: "254852748805",
  appId: "1:254852748805:web:34060f71415bfc928dae6c"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  