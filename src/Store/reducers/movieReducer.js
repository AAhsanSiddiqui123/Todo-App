import { createSlice, current } from '@reduxjs/toolkit';


const initialCounterState = { 
  popularMovie: [], 
  nowMovie:[],
  topMovie:[],
  upMovie:[],
  tvShow:[],
  filterMovie:[],

  peopleArray:[], 
  topCase: [], 
  reviews: [], 
  isLoading: false, 
  activePageNum: 1, 
  loadMoreClicked:false
 };

const movieReducer = createSlice({
  name: 'movieReducer',
  initialState: initialCounterState,
  reducers: {


    filterMovieHandler(state, action, count) {
      if(action.count === 1){
        state.filterMovie = action.payloadFilter.data.results;
      }else{
        state.filterMovie = [...state.filterMovie, ...action.payloadFilter.data.results];
      }
    },

    popularMovieHandler(state, action, count) {
      if(action.count === 1){
        state.popularMovie = action.payload.data.results;
      }else{
        state.popularMovie = [...state.popularMovie, ...action.payload.data.results];
      }
    },

    nowPlayingMovieHandler(state, action) {
      if(action.count === 1){
        state.nowMovie = action.payload.data.results;
      }else{
        state.nowMovie = [...state.nowMovie, ...action.payload.data.results];
      }
    },

    topMovieHandler(state, action) {
      if(action.count === 1){
        state.topMovie = action.payload.data.results;
      }else{
        state.topMovie = [...state.topMovie, ...action.payload.data.results];
      }
    },

    upCommingMovie(state, action) {
      if(action.count === 1){
        state.upMovie = action.payload.data.results;
      }else{
        state.upMovie = [...state.upMovie, ...action.payload.data.results];
      }
    },

    tvShowsHandler(state, action){
      if(action.count === 1){
        state.tvShow = action.payload.data.results;
      }else{
        state.tvShow = [...state.tvShow, ...action.payload.data.results];
      }
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
      state.isLoading = action.payload.loading
    },

    activePageNumHandler(state, action){
      state.activePageNum = action.payload
    },

    loadMoreClickedHandler(state, action){
      console.log();
      state.loadMoreClicked = action.payload
    }

  }
});



export const movieActionCreater = movieReducer.actions;

export default movieReducer.reducer;