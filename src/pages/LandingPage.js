import { Outlet } from 'react-router-dom';
import AppBar from "../components/common/AppBar";

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import style from "./HeroSection.module.css"
import SideBar from '../components/common/SideBar';

import Footer from "../components/common/Footer"


export default function FixedContainer() {


    return (
        <React.Fragment>
            <AppBar />
            <CssBaseline />
            <Container style={{ 
                maxWidth: "80%",
                 }} >
                    <hr style={{ opacity: "none" }} />
                    <h1 className={style.activePage}>Popular Movies</h1>

                    <Grid container spacing={3}>
                        <SideBar />
                        <Grid item xs={12} sm={12} md={9} lg={9.5}>
                            <div style={{ backgroundColor: 'white' }} className={style.wraper}>
                                <Outlet />
                            </div>
                        </Grid>
                    </Grid>\
            </Container>
            <Footer/>
        </React.Fragment>
    );
}