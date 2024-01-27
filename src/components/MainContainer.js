import React from 'react'
import { useSelector } from 'react-redux';
import VideoTittle from './VideoTittle';
import VideoBackground from './VideoBackground';


const MainContainer = () => {


    const movies  = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies===null) return;
  

    const {original_title,overview,id}=movies[2];



  return (
    <div>
      <VideoTittle  title={original_title} overview={overview} />
      <VideoBackground  movieId={id}/>
    </div>
  )
}

export default MainContainer
