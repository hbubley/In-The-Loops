import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCM6CtU_1gLrFWPI3xrz0wQ3NcrE91F42I",
    authDomain: "in-the-loops.firebaseapp.com",
    projectId: "in-the-loops",
    storageBucket: "in-the-loops.appspot.com",
    messagingSenderId: "197292954558",
    appId: "1:197292954558:web:57f2671ec0b084ba5cdfef",
    measurementId: "G-8TGRGFFQC4"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore }