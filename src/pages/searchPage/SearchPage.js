import * as React from 'react';
import SearchCard from "../../components/common/cards/SearchCards";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

import { useSelector, useDispatch } from 'react-redux';
import { height } from '@mui/system';



export default function HomePage(props) {
    let skeletonarr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    let isloading = useSelector((state) => state.movieReducer.isLoading);
    let searchList = useSelector((state) => state.searchReducer.searchList);

    // console.log(searchList);
    
    if (!isloading && searchList.length > 0) {
        searchList = searchList.map((curr, index) => {
            return <SearchCard
                key={`${curr.id}-${index}`}
                data={curr}
            />
        })
    } else if (isloading) {
        searchList = skeletonarr.map((curr) => <SkeletonChildren key={curr} />)
    }

    console.log(searchList);

    return (
        <>
            { searchList.length <= 0 ? 
            <div style={{height:"100vh", textAlign:"center"}}><h1>No Record Found</h1></div>
             :searchList}
            {/* {!isloading ? searchList.map((curr, index) => {
                return <SearchCard
                    key={`${curr.id}-${index}`}
                    data={curr}
                />
            }) :skeletonarr.map((curr) => <SkeletonChildren key={curr} />)
    } */}
        </>
    )
}


function SkeletonChildrenDemo() {
    return (
        <div>
            <Skeleton variant="rectangular" height="150px" sx={{mb:"5px"}}></Skeleton>
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
