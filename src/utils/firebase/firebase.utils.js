// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBVM2p-KmEQAktvmk9iYd_FWW65JQYF-Xk",
  authDomain: "crwn-clothing-db-4914a.firebaseapp.com",
  projectId: "crwn-clothing-db-4914a",
  storageBucket: "crwn-clothing-db-4914a.appspot.com",
  messagingSenderId: "1090632490717",
  appId: "1:1090632490717:web:ea554cd48707bb6f45c534",
  measurementId: "G-NG5XMSLE9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup =() =>signInWithPopup(auth,provider)

export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,addittionalInfo) =>{
  const userDocRef = doc(db,'users',userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
 if(!userSnapshot.exists()){
  const {displayName,email}=userAuth;
  const createdAt = new Date();

  try{
    await setDoc(userDocRef,{
      displayName,
      email,
      createdAt,
      ...addittionalInfo
    })
  }catch(error){
    console.log('Error creating the user snapshot')
  }
 }
 return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email,password) =>{
  if(!email || !password) return;
  return await  createUserWithEmailAndPassword(auth,email,password)
}
export const signInUser = async(email,password) =>{
  if(!email || !password) return;
  return await  signInWithEmailAndPassword(auth,email,password)
}