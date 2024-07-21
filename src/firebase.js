// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBkBMOg0rkEAuC5JazDn-7fH5ZpxePP91I",
  authDomain: "netflix-a9d92.firebaseapp.com",
  projectId: "netflix-a9d92",
  storageBucket: "netflix-a9d92.appspot.com",
  messagingSenderId: "947818626883",
  appId: "1:947818626883:web:49418c7fb3f58c2c5579f6",
  measurementId: "G-DWB8RY8ENH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    toast.success("User signed up successfully");
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("User logged in successfully");
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = () => {
  try {
    signOut(auth);
    toast.success("User logged out successfully");
  } catch (error) {
    console.error(error);
    toast.error(error.code);
  }
};

export { auth, db, login, signup, logout };
