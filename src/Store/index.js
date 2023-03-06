import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import manageStateReducer from './reducers/manageState';
import movieReducer from "./reducers/movieReducer";
import searchReducer from "./reducers/searchReducer";
import discoverReducer from './reducers/discoverReducer';

import MovieSaga from "./sagas/movieSaga/moviesSaga";
import getCastSaga from "./sagas/movieSaga/topCast";
import getReviewSaga from "./sagas/movieSaga/reviewSaga"

import tvSaga from "./sagas/tvSaga/tvSaga";
import getTvCastSaga from "./sagas/tvSaga/topTvCastSaga";
import getTvReviewSaga from "./sagas/tvSaga/reviewTvSaga";

import peopleSaga from "./sagas/peopleSaga/peopleSaga";
import searchSaga from "./sagas/searchSaga/searchSaga"



const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]


const store = configureStore({
  reducer: {
    stateReducer: manageStateReducer,
    movieReducer: movieReducer,
    searchReducer: searchReducer,
    discoverReducer: discoverReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middleware),
}

);

sagaMiddleware.run(MovieSaga);
sagaMiddleware.run(getCastSaga);
sagaMiddleware.run(getReviewSaga);

sagaMiddleware.run(tvSaga);
sagaMiddleware.run(getTvCastSaga);
sagaMiddleware.run(getTvReviewSaga);

sagaMiddleware.run(peopleSaga);
sagaMiddleware.run(searchSaga);

export default store;