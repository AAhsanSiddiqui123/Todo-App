import { createSlice, current } from '@reduxjs/toolkit';
import dayjs from 'dayjs';


const initialCounterState = {
  queryObj: {
    air_date: null,
    air_date: "2023-08-09",
    certification: null,
    certification_country: "PK",
    debug: null,
    first_air_date: null,
    first_air_date: null,
    ott_region: "PK",
    page: 1,
    primary_release_date: null,
    primary_release_date: null,
    region: null,
    "release_date.gte": null,
    "release_date.lte": null,
    show_me: 0,
    sort_by: null,
    vote_average: 0,
    vote_average: 10,
    vote_count: 0,
    with_genres: [12, 35, 37],
    with_keywords: null,
    with_networks: null,
    with_origin_country: null,
    with_original_language: null,
    with_ott_monetization_types: null,
    with_ott_providers: null,
    with_release_type: null,
    with_runtime: 0,
    with_runtime: 400,

  },
};

const discoverReducer = createSlice({
  name: 'movieReducer',
  initialState: initialCounterState,
  reducers: {
    sortHandler(state, action){
      state.queryObj = { ...state.queryObj, sort_by: action.payload}
    },

    queryObjHandler(state, action) {
      state.queryObj = { ...state.queryObj, with_ott_monetization_types: action.payload.join("|") }
    },

    releaseDateCheckBoxHandler(state, action){
      state.queryObj = { ...state.queryObj, with_release_type: action.payload.join("|") }
    },

    fromDateHandler(state, action){
      let from = dayjs(action.payload).format("YYYY-MM-DD");
      state.queryObj = { ...state.queryObj, ["release_date.gte"]:from }
    },

    toDateHandler(state, action){
      console.log(action);
      let to = dayjs(action.payload.dateChange).format("YYYY-MM-DD");
      state.queryObj = { ...state.queryObj, ["release_date.lte"]:to }; 
    },

    chipHandler(state, action){
      state.queryObj = { ...state.queryObj, with_genres: action.payload }; 
    }





  }
});


export const discoverActionCreater = discoverReducer.actions;

export default discoverReducer.reducer;