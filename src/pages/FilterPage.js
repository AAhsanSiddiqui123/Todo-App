import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from "../components/common/cards/MovieCards";
import { Box, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SideBar from '../components/common/SideBar';
import style from "./HeroSection.module.css"
import Skeleton from "@mui/material/Skeleton";
import { movieActionCreater } from "../Store/reducers/movieReducer";
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '../components/common/Button';



export default function FilterPage(props) {
    let queryObj = useSelector((state) => state.discoverReducer.queryObj);
    let tag = useParams();
    const dispatch = useDispatch();
    let skeletonarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let filterMovie = useSelector((state) => state.movieReducer.filterMovie);
    let isloading = useSelector((state) => state.movieReducer.isLoading);
    let activePageNum = useSelector((state) => state.movieReducer.activePageNum);

    function loadMoreHandler() {
        console.log("footer")
        activePageNum = activePageNum + 1
        dispatch({ type: "discoverMovie_Saga", action: { queryObj: queryObj, page: activePageNum } })
        dispatch(movieActionCreater.activePageNumHandler(activePageNum))
        dispatch(movieActionCreater.loadMoreClickedHandler(true))

    }

    if (!isloading && filterMovie.length > 0) {
        filterMovie = filterMovie.map((curr, index) => {
            return <MovieCard
                key={`${curr.id}-${index}`}
                tag="movie"
                data={curr}
            />
        })
    } else if (isloading) {
        filterMovie = skeletonarr.map((curr) => <SkeletonChildren key={curr} />)
    }

    return (
        <>
            <Container style={{ maxWidth: "80%" }} >
                <hr style={{ opacity: "none" }} />
                <h1 className={style.activePage}>Popular Movies</h1>

                <Grid container spacing={3}>
                    <SideBar />
                    <Grid item xs={12} sm={12} md={9} lg={9.5}>
                        <div style={{ backgroundColor: 'white' }} className={style.wraper}>

                            {filterMovie.length <= 0 ? skeletonarr.map((curr) => {
                                if (curr === 1) {
                                    return <div key={curr} ><p>No Items were found that match your query.</p></div>
                                } else {
                                    return <div key={curr}></div>
                                }

                            })
                                : filterMovie}

                        </div>

                        {!filterMovie.length <= 0 && <Button loadMoreHandler={loadMoreHandler} />}

                    </Grid>
                </Grid>
            </Container>
        </>
    );
}



function SkeletonChildrenDemo() {
    return (
        <div>
            <Skeleton variant="rectangular" width="100%" height="300px"></Skeleton>
        </div>
    );
}

function SkeletonChildren() {
    return (
        <div>
            <Grid container spacing={8}>
                <Grid item xs>
                    <SkeletonChildrenDemo loading />
                </Grid>
            </Grid>
        </div>
    );
}
