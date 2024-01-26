import {createSlice} from '@reduxjs/toolkit'



const movieSlice=createSlice({
    name : 'movies',
    initialState :{
        nowPlayingMovies:null,
        trailerVideos:null,
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideios:(state,action)=>{
            state.trailerVideos=action.payload;
        }
       
    },
})

export const {addNowPlayingMovie,addTrailerVideios} = movieSlice.actions;
export default movieSlice.reducer; 