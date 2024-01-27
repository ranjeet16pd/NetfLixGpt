import {createSlice} from '@reduxjs/toolkit'



const movieSlice=createSlice({
    name : 'movies',
    initialState :{
        nowPlayingMovies:null,
        trailerVideos:null,
        topRated:null,
        upComing:null,
        popularMovies:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addUpcoming:(state,action)=>{
            state.upComing=action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload;
        },
        addTrailerVideios:(state,action)=>{
            state.trailerVideos=action.payload;
        }
       
    },
})

export const {addNowPlayingMovie,addTrailerVideios,addPopularMovies,addTopRated,addUpcoming} = movieSlice.actions;
export default movieSlice.reducer; 