import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwWt-9KdMva22jz_Z6x-iXBB4rMbILJrw",
  authDomain: "todo-app-c6c30.firebaseapp.com",
  projectId: "todo-app-c6c30",
  storageBucket: "todo-app-c6c30.appspot.com",
  messagingSenderId: "395483784111",
  appId: "1:395483784111:web:5cd8438fe421a7c8e8c55a",
});

const db = firebaseApp.firestore();

export default db;
