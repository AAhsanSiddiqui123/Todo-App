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
            <Container style={{ maxWidth: "90%" }} >
                <Box sx={{ bgcolor: 'white', }} >
                    <hr style={{ opacity: "none" }} />
                    <h1 className={style.activePage}>Popular Movies</h1>

                    <Grid container spacing={2}>
                        <SideBar />
                        <Outlet />
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}