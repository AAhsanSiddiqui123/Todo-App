import { createSlice, current } from '@reduxjs/toolkit';
import dayjs from 'dayjs';


const date = new Date()
const result = date.toLocaleDateString("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})
let to = dayjs(result).format("YYYY-MM-DD")


const initialCounterState = {
  queryObj: {
    air_date: null,
    air_date: null,
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
    "release_date.lte": to,
    show_me: 0,
    sort_by: null,
    "vote_average.gte": 0,
    "vote_average.lte": 10,
    "vote_count.gte": 0,
    with_genres: null,
    with_keywords: null,
    with_networks: null,
    with_origin_country: null,
    with_original_language: null,
    with_ott_monetization_types: null,
    with_ott_providers: null,
    with_release_type: null,
    "with_runtime.gte": 0,
    "with_runtime.lte": 400,

  },
};

const discoverReducer = createSlice({
  name: 'movieReducer',
  initialState: initialCounterState,
  reducers: {
    sortHandler(state, action) {
      state.queryObj = { ...state.queryObj, sort_by: action.payload }
    },



/////////////////////////////////////////////////////////////////////////    



    queryObjHandler(state, action) {
      state.queryObj = { ...state.queryObj, with_ott_monetization_types: `flatrate|${action.payload.join("|")}` }
    },

    releaseDateCheckBoxHandler(state, action) {
    //   state.queryObj = { ...state.queryObj, with_release_type: action.payload.join(",") }
    },

    fromDateHandler(state, action) {
      let from = dayjs(action.payload).format("YYYY-MM-DD");
      state.queryObj = { ...state.queryObj, ["release_date.gte"]: from }
    },

    toDateHandler(state, action) {
      let to = dayjs(action.payload.dateChange).format("YYYY-MM-DD");
      state.queryObj = { ...state.queryObj, ["release_date.lte"]: to };
    },

    chipHandler(state, action) {
      state.queryObj = { ...state.queryObj, with_genres: action.payload };
    },

    userScoreHandler(state, action) {
      state.queryObj =
      {
        ...state.queryObj,
        "vote_average.gte": +action.payload[0],
        "vote_average.lte": +action.payload[1]
      };
    },

    minimumUserVotesHandler(state, action) {
      state.queryObj = { ...state.queryObj,  "vote_count.gte": action.payload };
    },

    runtimeHandler(state, action) {
      state.queryObj = {
        ...state.queryObj,
        "with_runtime.gte": +action.payload[0],
        "with_runtime.lte": +action.payload[1]
      };
    },


/////////////////////////////////////////////////////

     whereToWatchCountry(state, action) {
       state.queryObj = { ...state.queryObj,  ott_region: action.payload };
    },

    whereToWatchOtt(state, action){
      state.queryObj = { ...state.queryObj,  with_ott_providers: action.payload.join(" ") };
    }




  }
});


export const discoverActionCreater = discoverReducer.actions;

export default discoverReducer.reducer;