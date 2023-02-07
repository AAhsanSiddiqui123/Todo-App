import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router';

import PopularMovies from "./pages/moviePages/PopularMovies";
import NowPlayingMovie from "./pages/moviePages/NowPlayingMovie"
import UpCommingMovie from "./pages/moviePages/UpCommingMovie";
import ToprateMovie from "./pages/moviePages/TopRatedMovie"
import LandingPage from "./pages/LandingPage";



const RoutesMain = () => {

    let routs;
    // if ("admin" === "admin") {

        routs = (<Routes>
            <Route path="/" element={<LandingPage />} >
                <Route path="/movie" element={<PopularMovies />} />
                <Route path="/movie/nowplaying" element={<NowPlayingMovie />} />
                <Route path="/movie/upcomming" element={<UpCommingMovie />} />
                <Route path="/movie/toprated" element={<ToprateMovie />} />
            </Route>
        </Routes>)

    // } else {
    //     routs = (<Routes>
    //         {/* <Route path="/" element={<SigninPage />} /> */}
    //     </Routes>)
    // }


    return (
        <Fragment>
            {routs}
        </Fragment>

    )
}

export default RoutesMain