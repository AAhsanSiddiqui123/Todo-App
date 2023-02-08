import { Outlet } from 'react-router-dom';
import AppBar from "../components/common/AppBar";

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import style from "./HeroSection.module.css"
import SideBar from '../components/common/SideBar';

export default function FixedContainer() {


    return (
        <React.Fragment>
            <AppBar />
            <CssBaseline />
            <Container style={{ 
                maxWidth: "80%",
                 }} >
                {/* <Box sx={{ bgcolor: 'white', }} > */}
                    <hr style={{ opacity: "none" }} />
                    <h1 className={style.activePage}>Popular Movies</h1>

                    <Grid container spacing={3}>
                        <SideBar />
                        <Grid item lg={9.5} md={9} sm={12} xs={12}>
                            <div style={{ backgroundColor: 'white' }} className={style.wraper}>
                                <Outlet />
                            </div>
                        </Grid>
                    </Grid>
                {/* </Box> */}
            </Container>
        </React.Fragment>
    );
}