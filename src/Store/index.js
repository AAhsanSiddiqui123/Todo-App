import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import manageStateReducer from './reducers/manageState';
import movieReducer from "./reducers/movieReducer";

import PopularMovieSaga from "./sagas/popularMoviesSaga";
import topRatedMovieSaga from "./sagas/topRatedMovieSaga";
import upCommingMovieSaga from "./sagas/upCommingMovieSaga";
import nowplayingMovieSaga from "./sagas/nowplayingMovieSaga"
import tvSaga from "./sagas/tvSaga"



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

sagaMiddleware.run(tvSaga);


export default store;