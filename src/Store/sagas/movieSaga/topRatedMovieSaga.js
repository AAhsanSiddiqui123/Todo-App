import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../../reducers/movieReducer';
import { Get_TopRatedMovie_url } from "../../../Services/url"
import { axiosService } from "../../../Services/axios.service"


function* getTopRatedMovie(action) {
    console.log("top rated")

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

function* topRatedMovieSaga() {
    yield takeEvery("TopRatedMovie_saga", getTopRatedMovie)
}

export default topRatedMovieSaga;