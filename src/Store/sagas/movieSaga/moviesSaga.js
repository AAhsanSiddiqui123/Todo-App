import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../../reducers/movieReducer';
import { Get_AllPopular_url, Get_NowPlayingMovie_url, Get_TopRatedMovie_url, Get_UpCommingMovie_url, Discover_url } from "../../../Services/url"
import { axiosService } from "../../../Services/axios.service"

//////// popular Movie

function* getPopularMovie(action) {
    let count = action?.action?.count;
    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: true } });
    let payload 
        payload = yield axiosService({
            method: "GET",
            url: `${Get_AllPopular_url}/popular`,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", page: action.action.page }
        })

    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: false } });
    yield put({ type: movieActionCreater.popularMovieHandler, payload, count });

}


/////// Now Playing Moive

function* getNowPlayingMovie(action) {
    let count = action?.action?.count;

    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: true } });
    let payload = yield axiosService({
        method: "GET",
        url: `${Get_NowPlayingMovie_url}/now_playing`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", page: action.action.page }
    })
    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: false } });
    yield put({ type: movieActionCreater.nowPlayingMovieHandler, payload,  count});
    
}


//////// top Rated

function* getTopRatedMovie(action) {
    let count = action?.action?.count;

    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: true } });
    let payload = yield axiosService({
        method: "GET",
        url: `${Get_TopRatedMovie_url}/top_rated`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US",page: action.action.page }
    })
    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: false } });
    yield put({ type: movieActionCreater.topMovieHandler, payload, count });
}


/////// Get upComming Moive

function* getUpcomminMovie(action) {
    let count = action?.action?.count;

    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: true } });
    let payload = yield axiosService({
        method: "GET",
        url: `${Get_UpCommingMovie_url}/upcoming`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", page: action.action.page }
    }) 
    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: false } });
    yield put({ type: movieActionCreater.upCommingMovie, payload,  count});
}



////// Discover Movies
function* discover(action) {
    let params = action?.queryString || null;


    console.log(params);
    // yield put({ type: movieActionCreater.loadingHandler, payload: { loading: true } });
    let payload = yield axiosService({
        method: "GET",
        url: `${Discover_url}/movie`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { 
              api_key: "a501016df75ba02be8137f4996f56d90",
              language: "en-US",
              air_date  : "2023-08-09",
              certification: null,
              certification_country: "PK",
              debug: null,
              first_air_date : null,
              first_air_date  : null,
              ott_region: "PK",
              page: 1,
              primary_release_date : null,
              primary_release_date  : null,
              region: null,
              "release_date.gte" : params?.['release_date.gte'],
              "release_date.lte" : params?.['release_date.lte'],
              show_me: 0,
              sort_by: null,
              vote_average : 0,
              vote_average  : 10,
              vote_count : 0,
              with_genres: params?.with_genres,
              with_keywords: null,
              with_networks: null,
              with_origin_country: null,
              with_original_language: null,
              with_ott_monetization_types: params?.with_ott_monetization_types,
              with_ott_providers: null,
              with_release_type: params?.with_release_type,
              with_runtime : 0,
              with_runtime  : 400,
            
            }
    }) 

    console.log(payload);
    // yield put({ type: movieActionCreater.loadingHandler, payload: { loading: false } });
    // yield put({ type: movieActionCreater.upCommingMovie, payload,  count});
}


function* MovieSaga() {
    yield takeEvery("popularMovie_saga", getPopularMovie);
    yield takeEvery("nowPlayingMovie_saga", getNowPlayingMovie);
    yield takeEvery("TopRatedMovie_saga", getTopRatedMovie);
    yield takeEvery("UpCommingMovie_saga", getUpcomminMovie);
    yield takeEvery("discoverMovie_Saga", discover);

}

export default MovieSaga;