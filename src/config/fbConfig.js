import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmPEoLrcYxnrjMda6cGP_kK1hsFfk73pQ",
    authDomain: "marioplan-dd8b7.firebaseapp.com",
    databaseURL: "https://marioplan-dd8b7.firebaseio.com",
    projectId: "marioplan-dd8b7",
    storageBucket: "marioplan-dd8b7.appspot.com",
    messagingSenderId: "28148187580",
    appId: "1:28148187580:web:a2eed6a29d6c16022cebb9",
    measurementId: "G-ETC2V2NPJT"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;