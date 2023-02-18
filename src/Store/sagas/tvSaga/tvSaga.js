import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../../reducers/movieReducer';
import { Get_AllTvPopular_url } from "../../../Services/url"
import { axiosService } from "../../../Services/axios.service"


function* getTvShows(action) {
    // console.log(action.action.page);

    let payload = yield axiosService({
        method: "GET",
        url: `${Get_AllTvPopular_url}/popular`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", page: action.action.page }
    })
    
    
    yield put({ type: movieActionCreater.listHandler, payload });
}

function* tvSaga() {
    yield takeEvery("Tv_saga", getTvShows)
}

export default tvSaga;