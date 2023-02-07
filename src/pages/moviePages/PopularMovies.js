import * as React from 'react';
import Grid from '@mui/material/Grid';
import style from "../HeroSection.module.css"
import { useSelector, useDispatch } from 'react-redux';

import MovieCard from "../../components/common/Card"



export default function MainCardContainer(props){
    const dispatch = useDispatch();

    let moviesArray
    moviesArray = useSelector((state) => state.movieReducer.moviesArray);
    React.useEffect(()=>{
        dispatch({ type: "popularMovie_saga", action: "payload" })

    },[])
    console.log(moviesArray)

return (
    <Grid item lg={8} md={8} sm={12} xs={12}>
        <div style={{ backgroundColor: 'white' }} className={style.wraper}>
            {moviesArray ? moviesArray.map((curr) => {
                return <MovieCard
                    key={curr.id}
                    data={curr}
                />
            }):[]}
        </div>
    </Grid>
);
}