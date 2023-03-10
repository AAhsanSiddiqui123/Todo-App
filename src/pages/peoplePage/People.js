import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PeopleCards from "../../components/common/cards/PeopleCards";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SideBar from '../../components/common/SideBar';
import style from "../HeroSection.module.css"


export default function TvShows(props) {
    const dispatch = useDispatch();

    let peopleArray = useSelector((state) => state.movieReducer.peopleArray);
    React.useEffect(() => {
        dispatch({ type: "people_saga", action: "payload" })

    }, [])

    return (
        <>
            <Container style={{maxWidth: "80%"}} >
                <hr style={{ opacity: "none" }} />
                <h1 className={style.activePage}>Popular Movies</h1>

                <Grid container spacing={3}>
                    <SideBar />
                    <Grid item xs={12} sm={12} md={9} lg={9.5}>
                        <div style={{ backgroundColor: 'white' }} className={style.wraper}>
                            {peopleArray ? peopleArray.map((curr) => {
                                return <PeopleCards
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