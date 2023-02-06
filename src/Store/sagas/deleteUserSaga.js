import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../reducers/movieReducer';
import { Delete_User_url } from "../../Services/url"
import { axiosService } from "../../Services/axios.service"


function* deleteUserSaga(action) {
    const obj = {
        id: action.action.id
    }
    axiosService({
        method: "DELETE",
        url: `${Delete_User_url}/${action.action.id}`,
        body: obj,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    
    let payload = action.action.inputArray.filter((curr) => {
        return curr.id !== action.action.id;
    })
    
    console.log(payload);
    yield put({ type: movieActionCreater.listHandler, payload });
}

function* deleteSaga() {
    yield takeEvery("delete_saga", deleteUserSaga)
}

export default deleteSaga;