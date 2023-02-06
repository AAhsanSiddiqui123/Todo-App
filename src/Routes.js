import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router';

import MainCardContainer from "./pages/HeroSection";

import LandingPage from "./pages/LandingPage"



const RoutesMain = () => {

    let routs;
    // if ("admin" === "admin") {

        routs = (<Routes>
            <Route path="/movie" element={<LandingPage />} >
                <Route path="/movie" element={<MainCardContainer />} />
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