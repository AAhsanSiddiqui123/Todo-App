import * as React from 'react';
import SearchCard from "../../components/common/cards/SearchCards";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

import { useSelector, useDispatch } from 'react-redux';



export default function HomePage(props) {
    let skeletonarr = [1,2,3,4,5,6,7,8,9]

    let isloading = useSelector((state) => state.movieReducer.isLoading);
    let searchList = useSelector((state) => state.searchReducer.searchList);

    // console.log(searchList);
    // 


    return (
        <>

            {!isloading && (searchList.length > 0) ? searchList.map((curr, index) => {
                return <SearchCard
                    key={`${curr.id}-${index}`}
                    data={curr}
                />
            }) :  <SkeletonChildren  />} 
        </>
    )
}




function SkeletonChildren() {
    return (
        <div>
        
                  <h1>No Reocrd Found </h1>  
          
        </div>
    );
}
