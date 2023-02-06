import * as React from 'react';
import Grid from '@mui/material/Grid';
import style from "./HeroSection.module.css"
import MovieCard from '../components/common/Card';


export default function MainCardContainer(props){

return (
    <Grid item lg={8} md={8} sm={12} xs={12}>
        <h1>hello</h1>
        <div style={{ backgroundColor: 'white' }} className={style.wraper}>
            {/* {props.moviesArray.map((curr) => {
                return <MovieCard
                    key={curr.id}
                    data={curr}
                />
            })} */}
        </div>
    </Grid>
);
}