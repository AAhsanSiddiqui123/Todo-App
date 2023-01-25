import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import manageStateReducer from './manageState';
import toDoItemsReducer from "./todoItemsList";
import UserSaga from "./sagas/getUserSaga";
import deleteSaga from "./sagas/deleteUserSaga";
import addSaga from "./sagas/addUserSaga";
import updateSaga from "./sagas/updateUserSaga"


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]


const store = configureStore({
  reducer: {
    update: manageStateReducer,
    todoReducer: toDoItemsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middleware),

}

);

sagaMiddleware.run(UserSaga);
sagaMiddleware.run(deleteSaga);
sagaMiddleware.run(addSaga);
sagaMiddleware.run(updateSaga);


export default store;