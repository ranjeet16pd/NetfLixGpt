import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";

import { useEffect } from "react";

const useUpcoming = (movieId) => {
  const dispatch = useDispatch();
  const getUpcoming = async () => {
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      options
    );
    data = await data.json();
   
    dispatch(addUpcoming(data.results));
  };
  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcoming;
