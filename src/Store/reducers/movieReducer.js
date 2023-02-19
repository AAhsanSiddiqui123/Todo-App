import { createSlice, current } from '@reduxjs/toolkit';


const initialCounterState = { moviesArray: [], peopleArray:[], topCase: [], reviews: [], isLoading: false };

const movieReducer = createSlice({
  name: 'movieReducer',
  initialState: initialCounterState,
  reducers: {

    listHandler(state, action) {
      console.log();
      state.moviesArray = [...state.moviesArray, ...action.payload.data.results];
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
    },

    loadingHandler(state, action){
      console.log(action)
      state.isLoading = action.payload.loading
    }

  }
});



export const movieActionCreater = movieReducer.actions;

export default movieReducer.reducer;