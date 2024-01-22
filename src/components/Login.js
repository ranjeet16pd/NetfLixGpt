import React from "react";
import Header from "./Header";
import BackgroundImg1 from "../Images/BackgroundImg1.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignin, setIsSign] = useState(true);

  const toggleSignin = () => {
    setIsSign(!isSignin);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BackgroundImg1} alt="backgroundImg-1" />
      </div>

      <form className=" absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white  bg-opacity-70 rounded-lg">
        <h1 className="text-3xl py-4 my-2">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full bg-gray-500 rounded-lg"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="p-2 my-2 w-full bg-gray-500 rounded-lg"
        />
        <input
          type="passward"
          placeholder="Passward"
          className="p-2 my-2 w-full bg-gray-500  rounded-lg"
        />

        <button className="bg-red-700 p-2 my-4 w-full rounded-lg">
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
