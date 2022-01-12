import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCp2iZfONFnq_Yl6U1LVGwDbYNgGxvlOgw", 
    authDomain: "cloth4u-f38a8.firebaseapp.com",
    projectId: "cloth4u-f38a8",
    storageBucket: "cloth4u-f38a8.appspot.com",
    messagingSenderId: "172484357491", 
    appId: "1:172484357491:web:cc3e5dc79473219e52e906", 
    measurementId: "G-61XSQ7PKTE"
  };
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;