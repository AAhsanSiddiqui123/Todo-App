import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../reducers/movieReducer';
import { Post_User_url } from "../../Services/url"
import { axiosService } from "../../Services/axios.service"


function* addUserSaga(action) {
    console.log(action.action);

 
    axiosService({
        method: "POST",
        url: Post_User_url,
        body: action.action.item,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    console.log("testing");

    yield put({ type: movieActionCreater.listHandler, payload:  [...action.action.list, action.action.item] });
}

function* addSaga() {
    yield takeEvery("add_saga", addUserSaga)
}

export default addSaga;