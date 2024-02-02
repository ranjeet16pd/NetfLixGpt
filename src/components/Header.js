import React, { useEffect } from "react";
import netflixlog from "../Images/Netflix-Logo.png";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { setToggle } from "../utils/gptSlice";
import { Support_lang } from "../utils/languageconstant";
import { changeLanguage } from "../utils/configSlice";
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
  const handleGptSearch = () => {
    dispatch(setToggle());
  };

  const handleLangChange=(e)=>{
    // console.log(e.target.value);
    dispatch( changeLanguage(e.target.value))

  }

  const SearchToggle = useSelector((store) => store.gpt.toggle);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
    return () => unsubscribe;
  }, []);

  return (
    <div className="absolute px-10 w-full  bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="logo1">
        <img src={netflixlog} alt="NetflixLogo" className="w-44 " />
      </div>
      {props.isSign && (
        <div className="signout flex p-2">
          {SearchToggle && (
            <select onChange={handleLangChange} className="px-2 mt-8 mx-4  h-9  m-2  bg-gray-500  hover:bg-blue-700 text-white h-11 rounded-lg">
              {Support_lang.map((lang) => (
                <option key={lang.idnetifier} value={lang.idnetifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearch}
            className="bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold h-7 my-9 px-2 rounded"
          >
            GPT Search
          </button>

          <button
            onClick={handleSignout}
            className="bg-red-600 mx-4 hover:bg-red-800 text-white font-bold h-7 my-9 px-2 rounded"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
