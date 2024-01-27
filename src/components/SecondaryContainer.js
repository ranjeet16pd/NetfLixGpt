import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("popular movies" + movies.popularMovies);

  return (
    <div className="bg-black w-screen">
      <div className="-mt-28 relative z-20 ">
        <MoviesList title={"Now Playing "} movies={movies.nowPlayingMovies} />
        <MoviesList title={"TopRated"} movies={movies.topRated} />
        <MoviesList title={"Popular"} movies={movies.popularMovies} />
        <MoviesList title={"Upcoming"} movies={movies.upComing} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
