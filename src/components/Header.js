import React from "react";
import netflixlog from "../Images/Netflix-Logo.png";
const Header = () => {
  return (
    <div className="absolute px-20  bg-gradient-to-b from-black z-10">
      <img src={netflixlog} alt="NetflixLogo" className="w-44 " />
    </div>
  );
};

export default Header;
