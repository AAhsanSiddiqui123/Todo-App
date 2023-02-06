import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import manageStateReducer from './reducers/manageState';
import movieReducer from "./reducers/movieReducer";

import PopularMovieSaga from "./sagas/popularMoviesSaga";
import deleteSaga from "./sagas/deleteUserSaga";
import addSaga from "./sagas/addUserSaga";
import updateSaga from "./sagas/updateUserSaga"


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]


const store = configureStore({
  reducer: {
    update: manageStateReducer,
    movieReducer: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middleware),

}

);

sagaMiddleware.run(PopularMovieSaga);
sagaMiddleware.run(deleteSaga);
sagaMiddleware.run(addSaga);
sagaMiddleware.run(updateSaga);


export default store;