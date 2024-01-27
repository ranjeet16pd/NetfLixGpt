import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie, addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispactch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      // https://api.themoviedb.org/3/movie/popular
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const Json = await data.json();

    dispactch(addPopularMovies(Json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
