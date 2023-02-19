import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TvCard from "../../components/common/cards/TvCards";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SideBar from '../../components/common/SideBar';
import style from "../HeroSection.module.css";
import InfiniteScroll from 'react-infinite-scroll-component';
import { prettyDOM } from '@testing-library/react';



export default function TvShows(props) {
    const dispatch = useDispatch();
    const [apiCallOnScroll, setApiCallOnScroll] = React.useState(1)

    let moviesArray
    moviesArray = useSelector((state) => state.movieReducer.moviesArray);
    React.useEffect(() => {
        dispatch({ type: "Tv_saga", action: {page: 1} })

    }, [])

    // function fetchData() {
    //     setApiCallOnScroll(apiCallOnScroll + 1)
    // }
    
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
                            {moviesArray ? moviesArray.map((curr,index) => {
                                return <TvCard
                                    key={`${curr.id}-${index}`}
                                    data={curr}
                                />
                            }) : []}
                        </div>
                    </Grid>
                </Grid>
            </Container>


            {/* <InfiniteScroll
                dataLength={20} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
           >
            
           </InfiniteScroll> */}
  
        </>
    );
}