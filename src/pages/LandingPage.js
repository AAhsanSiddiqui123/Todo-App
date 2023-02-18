import { Outlet } from 'react-router-dom';
import AppBar from "../components/common/AppBar";

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';


import style from "./HeroSection.module.css"
import SideBar from '../components/common/SideBar';
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