import { options } from '../constants'
import {useDispatch} from 'react-redux';
import { addNowPlayingMovie } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  
    const dispactch=useDispatch();


    const getNowPlaying=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',options)
      const Json=await data.json();
      dispactch(addNowPlayingMovie(Json.results))
    }
  
    useEffect(()=>{
       getNowPlaying();
    },[])
  
}

export default useNowPlayingMovies;
