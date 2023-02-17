import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../../reducers/movieReducer';
import { magageStateAction } from '../../reducers/manageState';

import { Get_MovieCast_url } from "../../../Services/url"
import { axiosService } from "../../../Services/axios.service"


function* getCast(action) {
    yield put({ type: magageStateAction.castLoadingHandler, payload: true });

    let payload = yield axiosService({
        method: "GET",
        url: `${Get_MovieCast_url}/${action.payload}/credits`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US" }
    })

    // console.log(payload.data.cast);

    yield put({ type: magageStateAction.castLoadingHandler, payload: false });
    yield put({ type: movieActionCreater.castHandler, payload: payload.data.cast });
}

function* getCastSaga() {
    yield takeEvery("get_cast_saga", getCast)
}

export default getCastSaga;