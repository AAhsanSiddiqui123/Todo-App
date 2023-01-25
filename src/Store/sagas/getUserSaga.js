import { takeEvery, put } from 'redux-saga/effects'
import { todoActionCreater } from '../todoItemsList';
import { Get_AllUser_url } from "../../Services/url"
import { axiosService } from "../../Services/axios.service"


function* getUserSaga(a) {
    let payload =yield axiosService({ url: Get_AllUser_url });
    payload = payload.data;
    yield put({ type: todoActionCreater.listHandler, payload });
}

function* UserSaga() {
    yield takeEvery("user_saga", getUserSaga)
}

export default UserSaga;