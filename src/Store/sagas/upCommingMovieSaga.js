import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../reducers/movieReducer';
import { Get_UpCommingMovie_url } from "../../Services/url"
import { axiosService } from "../../Services/axios.service"


function* getUpcomminMovie(action) {
    console.log(action.action);

    let payload = yield axiosService({
        method: "GET",
        url: `${Get_UpCommingMovie_url}/upcoming`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", page: 1 }
    })
    
    
    yield put({ type: movieActionCreater.listHandler, payload });
}

function* upCommingMovieSaga() {
    yield takeEvery("UpCommingMovie_saga", getUpcomminMovie)
}

export default upCommingMovieSaga;