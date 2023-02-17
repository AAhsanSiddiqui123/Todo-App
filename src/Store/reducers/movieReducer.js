import { createSlice, current } from '@reduxjs/toolkit';


const initialCounterState = { moviesArray: [], peopleArray:[], topCase: [], reviews: [] };

const movieReducer = createSlice({
  name: 'movieReducer',
  initialState: initialCounterState,
  reducers: {

    listHandler(state, action) {
      console.log(action.payload.data.results);
      state.moviesArray = action.payload.data.results;
    },

    castHandler(state, action) {
      let arr = action.payload
      state.topCase = arr.slice(0, 10)
    },

    reviewsHandler(state, action){
      state.reviews = action.payload
    },

    peopleHandler(state, action){
      state.peopleArray = action.payload.data.results
    }

  }
});



export const movieActionCreater = movieReducer.actions;

export default movieReducer.reducer;