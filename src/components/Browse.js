import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';



const Browse = () => {

  //this is Custom Hook
 useNowPlayingMovies();


  return (
    <div>
      <Header isSign={true}/>
     <MainContainer/>
    
    </div>
  )
}

export default Browse
