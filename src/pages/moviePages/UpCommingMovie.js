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
        dispatch({ type: "UpCommingMovie_saga", action: "payload" })

    },[])
    console.log(moviesArray)

return (
    <>
    {moviesArray ? moviesArray.map((curr) => {
        return <MovieCard
            key={curr.id}
            data={curr}
        />
    }) : []}
</>
);
}