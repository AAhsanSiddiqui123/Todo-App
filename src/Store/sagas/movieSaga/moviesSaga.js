import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../../reducers/movieReducer';
import { Get_AllPopular_url, Get_NowPlayingMovie_url, Get_TopRatedMovie_url, Get_UpCommingMovie_url } from "../../../Services/url"
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


function* MovieSaga() {
    yield takeEvery("popularMovie_saga", getPopularMovie);
    yield takeEvery("nowPlayingMovie_saga", getNowPlayingMovie);
    yield takeEvery("TopRatedMovie_saga", getTopRatedMovie);
    yield takeEvery("UpCommingMovie_saga", getUpcomminMovie);

}

export default MovieSaga;