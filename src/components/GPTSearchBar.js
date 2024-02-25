import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageconstant";
import openai from "../utils/openai";
import { options } from "../constants";
const GPTSearchBar = () => {
  const SearchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const TMDBMoviesSearch = async (moviesName) => {
    const moviesSearch = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        moviesName +
        "&include_adult=false&language=en-US&page=1",
      options
    );

    const JsonMoves = await moviesSearch.json();
    return JsonMoves.results;
  };

  const handleGPtSearchClick = async () => {
    // console.log(SearchText.current.value)
    const query =
      "act as a movies recomondation system and suggest the movies for the query " +
      SearchText.current.value +
      ".Give only names of 5 Movies. Comma seperated like movies give ahed , Example Result  :  Dhmal, Mujhse Shadi krogi, Welcome";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    if (!chatCompletion.choices[0].message.content) console.log("Gpt APi fail");

    console.log(chatCompletion.choices[0].message.content);

    const gptmoviesResult = chatCompletion.choices[0].message.content.split(",");

    const promieArray= gptmoviesResult.map((data) => TMDBMoviesSearch(data));
   
    const tmdbResult=await  Promise.all(promieArray);
    console.log(tmdbResult);
  };

  return (
    <div className=" pt-[13%] flex justify-center">
      <form
        action=""
        className="  w-1/2 bg-black grid grid-cols-12"
        onClick={(e) => e.preventDefault()}
      >
        <input
          ref={SearchText}
          type="text"
          className="p-4 h-3 m-4 col-span-9"
          placeholder={lang[langKey].gptpalceHolder}
        />
        <button
          onClick={handleGPtSearchClick}
          className="py-2   col-span-3 m-4 bg-red-700 rounded-lg bg-black "
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
