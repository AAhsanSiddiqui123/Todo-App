import { createSlice, current } from '@reduxjs/toolkit';


const initialCounterState = { moviesArray: [], topCase: [], reviews: [] };

const movieReducer = createSlice({
  name: 'movieReducer',
  initialState: initialCounterState,
  reducers: {

    listHandler(state, action) {
      console.log(action.payload.data.results);
      state.moviesArray = action.payload.data.results;
    },

    castHandler(state, action) {
      // let initialArray = current(state.dataArray)
      let arr = action.payload
      state.topCase = arr.slice(0, 10)
    },

    reviewsHandler(state, action){
      state.reviews = action.payload
    }

  }
});



export const movieActionCreater = movieReducer.actions;

export default movieReducer.reducer;