import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../../reducers/movieReducer';
import { Get_People_url } from "../../../Services/url"
import { axiosService } from "../../../Services/axios.service"


function* getPeople(action) {
    console.log(action.action);

    let payload = yield axiosService({
        method: "GET",
        url: `${Get_People_url}/popular`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", page: 1 }
    })
    
    
    yield put({ type: movieActionCreater.peopleHandler, payload });
}

function* peopleSaga() {
    yield takeEvery("people_saga", getPeople)
}

export default peopleSaga;