import { takeEvery, put } from 'redux-saga/effects'
import { todoActionCreater } from '../todoItemsList';
import { Patch_User_url } from "../../Services/url"
import { axiosService } from "../../Services/axios.service"


function* updateUserSaga(action) {


    const obj = {
        name: action.action.inputValue
    }
    axiosService({
        method: "PATCH",
        url: `${Patch_User_url}/${action.action.id}`,
        body: obj,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    console.log(action.action);

    yield put({
        type: todoActionCreater.updateHandler, payload: {
            updatedId: action.action.id,
            inputChange: action.action.inputValue
        }
    });
}

function* updateSaga() {
    yield takeEvery("update_saga", updateUserSaga)
}

export default updateSaga;