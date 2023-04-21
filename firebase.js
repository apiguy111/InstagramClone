import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQ4v-AAulZU4yIh4kTXGOeJcj3esq1PrI",
  authDomain: "instagram-clone-8c10c.firebaseapp.com",
  projectId: "instagram-clone-8c10c",
  storageBucket: "instagram-clone-8c10c.appspot.com",
  messagingSenderId: "776727475703",
  appId: "1:776727475703:web:f17e527e0137f21bdeaaf2",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
