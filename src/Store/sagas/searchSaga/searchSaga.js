import { takeEvery, put } from 'redux-saga/effects'
import { searchAction } from '../../reducers/searchReducer';
import { Get_TvReview_url } from "../../../Services/url"
import { axiosService } from "../../../Services/axios.service";
import {Search_url} from "../../../Services/url"


function* getResult(action) {

    console.log(action.action.query);

    let payload = yield axiosService({
        method: "GET",
        url: `${Search_url}`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", query: action.action.query  }
    })

    console.log(payload.data.results);
    
    
    yield put({ type: searchAction.searchHandler, payload: payload.data.results });
}

function* searchSaga() {
    yield takeEvery("search_saga", getResult)
}

export default searchSaga;