// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZHM8SU109y6LSCQmyDjJq2TrfHsVK6-k",
  authDomain: "todolistproject-9732a.firebaseapp.com",
  projectId: "todolistproject-9732a",
  storageBucket: "todolistproject-9732a.appspot.com",
  messagingSenderId: "953688361812",
  appId: "1:953688361812:web:4d4efd6814f6cbd6a0d6c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const db = getFirestore(app)

const loginfunction = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("user login successfuly");
    alert("user login successfuly !!!! ");
  } catch (err) {
    console.error(err);
    alert(err.message)
  }

}
const registerfunction = async (email, password,name) => {
  try {
 const res =    await createUserWithEmailAndPassword(auth, email, password ) ;
  const user = res.user ;

    console.log("user login successfuly");
    alert("user login successfuly !!!! ");
  } catch (err) {
    console.error(err);
    alert(err.message)
  }

}

export {
  loginfunction,
  registerfunction
}