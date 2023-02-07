import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../reducers/movieReducer';
import { Get_TopRatedMovie_url } from "../../Services/url"
import { axiosService } from "../../Services/axios.service"


function* getTopRatedMovie(action) {
    console.log("top rated")
    let payload = yield axiosService({
        method: "GET",
        url: `${Get_TopRatedMovie_url}/top_rated`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", page: 1 }
    })


    yield put({ type: movieActionCreater.listHandler, payload });
}

function* topRatedMovieSaga() {
    yield takeEvery("TopRatedMovie_saga", getTopRatedMovie)
}

export default topRatedMovieSaga;