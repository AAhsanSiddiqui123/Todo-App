import { takeEvery, put } from 'redux-saga/effects'
import { searchAction } from '../../reducers/searchReducer';
import { movieActionCreater } from '../../reducers/movieReducer';
import { Get_TvReview_url } from "../../../Services/url"
import { axiosService } from "../../../Services/axios.service";
import {Search_url} from "../../../Services/url"


function* getResult(action) {

    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: true } });

    let payload = yield axiosService({
        method: "GET",
        url: `${Search_url}`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", query: action.action.query  }
    })

    
    yield put({ type: movieActionCreater.loadingHandler, payload: { loading: false } });
    yield put({ type: searchAction.searchHandler, payload: payload.data.results });
}

function* searchSaga() {
    yield takeEvery("search_saga", getResult)
}

export default searchSaga;