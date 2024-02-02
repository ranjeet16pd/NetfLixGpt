import React from "react";
import { useSelector } from "react-redux";
import lang from '../utils/languageconstant'
const GPTSearchBar = () => {


  const langKey=useSelector((store)=>store.config.lang);



  return (
    <div className=" pt-[13%] flex justify-center">
      <form action="" className="  w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 h-3 m-4 col-span-9"
          placeholder={lang[langKey].gptpalceHolder}
        />
        <button className="py-2   col-span-3 m-4 bg-red-700 rounded-lg bg-black ">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
