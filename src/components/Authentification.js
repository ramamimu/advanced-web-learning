import { useState, useRef } from "react";
import { auth } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default function Authentification() {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const [currentUsers, setCurrentUsers] = useState("");

  // FIREBASE AUTHENTIFICATION
  onAuthStateChanged(auth, (currentUser) => {
    setCurrentUsers(currentUser?.email);
  });

  const login = async (e) => {
    try {
      const email = inputEmail.current.value;
      const password = inputPassword.current.value;
      await signInWithEmailAndPassword(auth, email, password);
      inputEmail.current.value = "";
      inputPassword.current.value = "";
      console.log("success login to account");
    } catch (e) {
      console.log(e);
    }
  };

  const register = async () => {
    try {
      const email = inputEmail.current.value;
      const password = inputPassword.current.value;
      await createUserWithEmailAndPassword(auth, email, password);
      inputEmail.current.value = "";
      inputPassword.current.value = "";
      console.log("success create account");
    } catch (e) {
      console.log(e);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("log out success");
    } catch (e) {
      console.log("log out fail ", e);
    }
  };

  return (
    <div>
      <h1 className="text-3xl">Belajar FIREBASE</h1>
      <button onClick={() => logOut()} type="submit" className="p-2 block bg-white mt-2 text-black">
        sign out
      </button>
      <h3>User Login: {currentUsers}</h3>
      <h2 className="text-2xl">Authentification</h2>
      <form
        className="m-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>Email</p>
        <input ref={inputEmail} type="text" name="email" placeholder="Email" required />
        <p>Password</p>
        <input
          ref={inputPassword}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          onClick={() => login()}
          type="submit"
          className="p-2 block bg-white mt-2 text-black"
        >
          Login
        </button>
        <button onClick={() => register()} type="submit" className="p-2 bg-white text-black mt-2">
          Sign Up
        </button>
      </form>
    </div>
  );
}
