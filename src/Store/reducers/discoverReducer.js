import { createSlice, current } from '@reduxjs/toolkit';


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

    queryObjHandler(state, action) {
      // console.log(action.payload);

      state.queryObj = {...state.queryObj, with_ott_monetization_types : action.payload.join("|")}


      // console.log({...state.queryObj, ...action.payload});
      // state.queryObj = {...state.queryObj, ...action.payload}
    },
}
});


export const discoverActionCreater = discoverReducer.actions;

export default discoverReducer.reducer;