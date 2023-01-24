import { takeEvery, put } from 'redux-saga/effects'
import { magageStateAction } from '../Store/manageState';


function* getUserSaga() {
    let data = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    data = yield data.json();
    console.log("action is called", data);
    yield put({ type: magageStateAction.testSaga , data})
}

function* UserSaga() {
    yield takeEvery( "test_Saga" , getUserSaga)
}

export default UserSaga;