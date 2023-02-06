import React, { Fragment, useContext } from 'react';
import { Route, Routes } from 'react-router';
import AppBar from "./components/common/AppBar";
import HeroSection from "./pages/HeroSection";



const RoutesMain = () => {


    let routs;

    // if ("admin" === "admin") {

        routs = (<Routes>
            {/* <Route path="/" element={<AdminLayout />} > */}
                <Route path="/home" element={<AppBar />} />
                <Route path="/hero" element={<HeroSection />} />
            {/* </Route> */}
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