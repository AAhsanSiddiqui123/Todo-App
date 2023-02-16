import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from "../../components/common/MovieCards";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SideBar from '../../components/common/SideBar';
import style from "../HeroSection.module.css"



export default function MainCardContainer(props) {
    const dispatch = useDispatch();

    let moviesArray
    moviesArray = useSelector((state) => state.movieReducer.moviesArray);
    React.useEffect(() => {
        dispatch({ type: "nowPlayingMovie_saga", action: "payload" })

    }, [])
    console.log(moviesArray)

    return (
        <>
            <Container style={{ maxWidth: "80%" }} >
                <hr style={{ opacity: "none" }} />
                <h1 className={style.activePage}>Popular Movies</h1>

                <Grid container spacing={3}>
                    <SideBar />
                    <Grid item xs={12} sm={12} md={9} lg={9.5}>
                        <div style={{ backgroundColor: 'white' }} className={style.wraper}>
                            {moviesArray ? moviesArray.map((curr) => {
                                return <MovieCard
                                    key={curr.id}
                                    data={curr}
                                />
                            }) : []}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}