import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from "../../components/common/cards/MovieCards";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SideBar from '../../components/common/SideBar';
import style from "../HeroSection.module.css"
import Skeleton from "@mui/material/Skeleton";



export default function MainCardContainer(props) {
    const dispatch = useDispatch();
    let skeletonarr = [1,2,3,4,5,6,7,8,9,10];
   
    let moviesArray = useSelector((state) => state.movieReducer.moviesArray);
    let isloading = useSelector((state) => state.movieReducer.isLoading);
    React.useEffect(() => {
        dispatch({ type: "popularMovie_saga", action: "payload" })

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
                            {!isloading ? moviesArray.map((curr) => {
                                return <MovieCard
                                    key={curr.id}
                                    data={curr}
                                />
                            }) : skeletonarr.map((curr)=><SkeletonChildren key={curr}/>)}


                        </div>
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