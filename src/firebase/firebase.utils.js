import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDQbxUnCVN4K-Jf2ozQL88zPTSAyh2MzPE",
    authDomain: "ecom-2651c.firebaseapp.com",
    databaseURL: "https://ecom-2651c.firebaseio.com",
    projectId: "ecom-2651c",
    storageBucket: "ecom-2651c.appspot.com",
    messagingSenderId: "62529893322",
    appId: "1:62529893322:web:a6134ccad933ed3bb65533",
    measurementId: "G-1DL3KBSYKX"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    //console.log(snapShot);

    if (!snapShot.exists) {
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
            console.log("Error Creating User", error.message);
        }
    }

    return userRef;
}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

