import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../../reducers/movieReducer';
import {  Get_TvCast_url } from "../../../Services/url"
import { axiosService } from "../../../Services/axios.service"
import { magageStateAction } from '../../reducers/manageState';


function* getCast(action) {

    yield put({ type: magageStateAction.castLoadingHandler, payload: true });

    let payload = yield axiosService({
        method: "GET",
        url: `${Get_TvCast_url}/${action.payload}/credits`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US" }
    })

    
    yield put({ type: magageStateAction.castLoadingHandler, payload: false });
    yield put({ type: movieActionCreater.castHandler, payload: payload.data.cast });
}

function* getTvCastSaga() {
    yield takeEvery("get_tvCast_saga", getCast)
}

export default getTvCastSaga;