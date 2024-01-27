import React, { useEffect } from "react";
import netflixlog from "../Images/Netflix-Logo.png";
import SignoutLogo from "../Images/SignOutLogo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = (props) => {
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const dispatch = useDispatch();

  useEffect(() => {
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe;
  }, []);

  return (
    <div className="absolute px-10 w-full  bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="logo1">
        <img src={netflixlog} alt="NetflixLogo" className="w-44 " />
      </div>
      {props.isSign && (
        <div className="signout flex">
          <button onClick={handleSignout}>
            <img src={SignoutLogo} alt="signoutlogo" className="w-9  m-auto " />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
