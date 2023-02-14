import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../../reducers/movieReducer';
import { Get_MovieReview_url } from "../../../Services/url"
import { axiosService } from "../../../Services/axios.service"


function* getReview(action) {

    let payload = yield axiosService({
        method: "GET",
        url: `${Get_MovieReview_url}/${action.payload}/reviews`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US" }
    })

    console.log(payload);
    
    
    yield put({ type: movieActionCreater.reviewsHandler, payload: payload.data.results });
}

function* getReviewSaga() {
    yield takeEvery("get_Review_saga", getReview)
}

export default getReviewSaga;