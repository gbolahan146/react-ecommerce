import firebase from 'firebase';
import 'firefabse/auth';
import 'firebase/firestore';




export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;