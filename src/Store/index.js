import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import manageStateReducer from './reducers/manageState';
import movieReducer from "./reducers/movieReducer";

import PopularMovieSaga from "./sagas/movieSaga/popularMoviesSaga";
import topRatedMovieSaga from "./sagas/movieSaga/topRatedMovieSaga";
import upCommingMovieSaga from "./sagas/movieSaga/upCommingMovieSaga";
import nowplayingMovieSaga from "./sagas/movieSaga/nowplayingMovieSaga";
import getCastSaga from "./sagas/movieSaga/topCast";
import getReviewSaga from "./sagas/movieSaga/reviewSaga"

import tvSaga from "./sagas/tvSaga/tvSaga";



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
sagaMiddleware.run(nowplayingMovieSaga);
sagaMiddleware.run(topRatedMovieSaga);
sagaMiddleware.run(upCommingMovieSaga);
sagaMiddleware.run(getCastSaga);
sagaMiddleware.run(getReviewSaga);

sagaMiddleware.run(tvSaga);


export default store;