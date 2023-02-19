import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../../reducers/movieReducer';
import { Get_AllPopular_url } from "../../../Services/url"
import { axiosService } from "../../../Services/axios.service"


function* getPopularMovie(action) {
    // console.log(action.action.page);

    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: true } });
    let payload = yield axiosService({
        method: "GET",
        url: `${Get_AllPopular_url}/popular`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", page: action.action.page }
    })
    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: false } });



    yield put({ type: movieActionCreater.listHandler, payload });

}

function* PopularMovieSaga() {
    yield takeEvery("popularMovie_saga", getPopularMovie)
}

export default PopularMovieSaga;