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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShop = await userRef.get();

  if(!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;