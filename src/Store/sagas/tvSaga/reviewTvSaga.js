import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../../reducers/movieReducer';
import { Get_TvReview_url } from "../../../Services/url"
import { axiosService } from "../../../Services/axios.service"


function* getReview(action) {

    let payload = yield axiosService({
        method: "GET",
        url: `${Get_TvReview_url}/${action.payload}/reviews`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US" }
    })

    
    
    yield put({ type: movieActionCreater.reviewsHandler, payload: payload.data.results });
}

function* getTvReviewSaga() {
    yield takeEvery("get_TvReview_saga", getReview)
}

export default getTvReviewSaga;