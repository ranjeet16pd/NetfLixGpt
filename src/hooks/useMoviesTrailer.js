import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addTrailerVideios } from "../utils/movieSlice";

import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    data = await data.json();
    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[1] : data.results[0];
    dispatch(addTrailerVideios(trailer));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useMoviesTrailer;
