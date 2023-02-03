import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import style from "./HeroSection.module.css"
import MovieCard from "../components/common/Card"


export default function FixedContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container style={{ maxWidth: "75%" }} >
                <Box sx={{ bgcolor: 'white', }} >
                    <hr style={{ opacity: "none" }} />
                    <h1 className={style.activePage}>Popular Movies</h1>

                    <Grid container spacing={2}>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <div style={{ backgroundColor: 'lightBlue' }} >xs=8</div>
                        </Grid>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <div style={{ backgroundColor: 'white' }} className={style.wraper}>
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />

                            </div>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}