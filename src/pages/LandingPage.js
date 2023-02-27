import { Outlet } from 'react-router-dom';
import AppBar from "../components/common/AppBar";

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from "../components/common/Footer";


export default function FixedContainer() {

    return (
        <React.Fragment>
            <AppBar />
            <CssBaseline />

            <Outlet />

            <Footer />
        </React.Fragment>
    );
}