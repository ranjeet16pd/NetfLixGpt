import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPtMoviesSuggetion from "./GPtMoviesSuggetion";
import BackgroundImg1 from "../Images/BackgroundImg1.jpg";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BackgroundImg1} alt="backgroundImg-1" />
      </div>
      <GPTSearchBar />
      <GPtMoviesSuggetion />
    </div>
  );
};

export default GptSearch;
