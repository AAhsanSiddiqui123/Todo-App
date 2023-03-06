import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router';

import PopularMovies from "./pages/moviePages/PopularMovies";
import NowPlayingMovie from "./pages/moviePages/NowPlayingMovie"
import UpCommingMovie from "./pages/moviePages/UpCommingMovie";
import ToprateMovie from "./pages/moviePages/TopRatedMovie"
import LandingPage from "./pages/LandingPage";
import FilterPage from './pages/FilterPage';

import TvShows from "./pages/tvPage/TvShows";
import MovieDetailPage from "./pages/MovieDetailPage";
import TvDetailPage from "./pages/TvDetailPage";

import PeoplePage from "./pages/peoplePage/People"

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/searchPage/SearchPage"


const RoutesMain = () => {

    let routs;
    // if ("admin" === "admin") {

    routs = (<Routes>
        <Route path="/" element={<LandingPage />} >
            <Route path="/" element={<HomePage />} />
            <Route path="movie" element={<PopularMovies />} />
            <Route path="movie/nowplaying" element={<NowPlayingMovie />} />
            <Route path="movie/upcomming" element={<UpCommingMovie />} />
            <Route path="movie/toprated" element={<ToprateMovie />} />
            <Route path="/movie/:id/" element={<MovieDetailPage />} />
            <Route path="/filterpage" element={<FilterPage />} />

            <Route path="tv/popular" element={<TvShows />} />
            <Route path="/tv/:id/" element={<TvDetailPage />} />

            <Route path="/people" element={<PeoplePage />} />

            <Route path="/search" element={<SearchPage />} />

        </Route>


    </Routes>)



    return (
        <Fragment>
            {routs}
        </Fragment>

    )
}

export default RoutesMain