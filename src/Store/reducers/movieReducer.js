import { createSlice, current } from '@reduxjs/toolkit';


const initialCounterState = { moviesArray: [] };

const movieReducer = createSlice({
  name: 'movieReducer',
  initialState: initialCounterState,
  reducers: {

    listHandler(state, action) { 
      console.log(action.payload.data.results); 
      state.moviesArray = action.payload.data.results;
    },

    // updateHandler(state, action) {
    //   let initialArray = current(state.dataArray)
    //   let indexdValue = initialArray.findIndex((curr) => {
    //     return curr.id === action.payload.updatedId
    //   })

    //   let obj = {
    //     ...initialArray[indexdValue],
    //     name: action.payload.inputChange
    //   }

    //   state.dataArray[indexdValue] = obj
    // },


  },
});



export const movieActionCreater  = movieReducer.actions;

export default movieReducer.reducer;