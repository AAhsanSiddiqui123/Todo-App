import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SideBarDropDown from "../components/common/sideBarDropDown/SideBarDropDown0";
import { useSelector, useDispatch } from 'react-redux';


import style from "./HeroSection.module.css"
import MovieCard from "../components/common/Card"
import SideVarDropDown1 from "../components/common/sideBarDropDown/SideVarDropDown1";
import Paper from '@mui/material/Paper';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



export default function FixedContainer() {
    const [drop1, setDrop1] = React.useState(false);
    const [drop2, setDrop2] = React.useState(false);

    const moviesArray = useSelector((state) => state.movieReducer.moviesArray);
    console.log(moviesArray)

    return (
        <React.Fragment>
            <CssBaseline />
            <Container style={{ maxWidth: "90%" }} >
                <Box sx={{ bgcolor: 'white', }} >
                    <hr style={{ opacity: "none" }} />
                    <h1 className={style.activePage}>Popular Movies</h1>

                    <Grid container spacing={2}>
                        <Grid item lg={3.2} md={3.2} sm={12} xs={12}>
                            {/* <div style={{ backgroundColor: '' }} > */}

                            <Paper style={{ border: "solid 1px lightgrey", borderRadius: "6px", }}>
                                <div style={{ height: "60px", cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => { return setDrop1(!drop1) }}>
                                    <p>Sort</p>
                                </div>
                                {drop1 && <SideBarDropDown />}
                            </Paper>

                            <Paper style={{marginTop: "14px" , border: "solid 1px lightgrey", borderRadius: "6px" }}>
                                <div style={{ height: "60px", cursor: "pointer", display: "flex", alignItems: "center",justifyContent: "space-between", paddingRight:"8px", paddingLeft:"8px" }} onClick={() => { return setDrop2(!drop2) }}>
                                    <p>Filter</p> 
                                    <ChevronRightIcon />
                                </div>
                                {drop2 && <SideVarDropDown1 />}
                            </Paper>

                            {/* <SideBarDropDown /> */}
                            {/* </div> */}
                        </Grid>
                        <Grid item lg={8} md={8} sm={12} xs={12}>
                            <div style={{ backgroundColor: 'white' }} className={style.wraper}>
                                {moviesArray.map((curr)=>{
                                    // console.loc(curr)
                                    return <MovieCard
                                        key={curr.id}
                                        data= {curr}
                                    />

                                })}
               
                            </div>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}