import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieCard from "../../components/common/Card"



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
            {moviesArray.map((curr) => {
                return <MovieCard
                    key={curr.id}
                    data={curr}
                />
            })}
        </>
    );
}