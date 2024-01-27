import { options } from "../constants";
import { useDispatch } from "react-redux";
import {addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispactch = useDispatch();

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const Json = await data.json();

    dispactch(addTopRated(Json.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
