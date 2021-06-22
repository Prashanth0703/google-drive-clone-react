import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB5QYLQ3Fvtn7HOOVa5vkfHTagzC-GK_X4",
    authDomain: "drive-clone-87777.firebaseapp.com",
    projectId: "drive-clone-87777",
    storageBucket: "drive-clone-87777.appspot.com",
    messagingSenderId: "1037409829096",
    appId: "1:1037409829096:web:1c1e21689c788accda095d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
