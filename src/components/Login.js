import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import BackgroundImg1 from "../Images/BackgroundImg1.jpg";
import {useDispatch} from 'react-redux';
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignin, setIsSign] = useState(true);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const [errorMes, seterrorMes] = useState("");
 const dispatch=useDispatch();
  const navigate = useNavigate();
  const toggleSignin = () => {
    setIsSign(!isSignin);
  };

  const handleclick = () => {
    var message = checkValidData(email.current.value, password.current.value);
    seterrorMes(message);
    if (message) return;

    // sign up logic
    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/91504447?v=4",
          })
            .then(() => {
              // Profile updated!
              const {uid,email,displayName,photoURL}=auth.currentUser;
              dispatch(addUser({uid : uid, email:email, displayName:displayName,photoURL:photoURL}))
              // ..
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              seterrorMes(error + '   null h bhai');
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMes(errorCode + "->" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;

          navigate("/browse");
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          seterrorMes("User Not Found ");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BackgroundImg1} alt="backgroundImg-1" />
      </div>

      <form
        className=" absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white  bg-opacity-70 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl py-4 my-2">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            id="1"
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full bg-gray-500 rounded-lg"
          />
        )}

        <input
          id="123"
          ref={email}
          type="email"
          placeholder="Email"
          className="p-2 my-2 w-full bg-gray-500 rounded-lg"
        />
        <input
          id="12"
          ref={password}
          type="password"
          placeholder="Passward"
          className="p-2 my-2 w-full bg-gray-500  rounded-lg"
        />
        <p className="text-red-600">{errorMes}</p>

        <button
          className="bg-red-700 p-2 my-4 w-full rounded-lg"
          onClick={handleclick}
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-sm" onClick={toggleSignin}>
          {isSignin ? "Are you New User? Sign Up" : "Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
