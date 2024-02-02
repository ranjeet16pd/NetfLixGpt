import {createSlice} from '@reduxjs/toolkit'


const gptSlice=createSlice({
    name : 'gpt',
    initialState :{
        toggle:false,
    },
    reducers:{
        setToggle:(state)=>{
            state.toggle=!state.toggle;
        }
    },
})

export const {setToggle} = gptSlice.actions;
export default gptSlice.reducer; 