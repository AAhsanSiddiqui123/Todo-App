import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Height } from '@mui/icons-material';
import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";


import HomePageCards from "../components/common/cards/HomePageCards";
import { useSelector, useDispatch } from 'react-redux';


let input;
export default function HomePage(props) {
    const [input, setInput] = React.useState("");
    const [submitClicked, setSubmitClicked] = React.useState(false)

    const navigate = useNavigate();

    let popularMovie = useSelector((state) => state.movieReducer.popularMovie);
    const dispatch = useDispatch();
    let ref = React.useRef()

    React.useEffect(() => {
        dispatch({ type: "popularMovie_saga", action: { count: 1, page: 1 } });
    }, [])

    const rndInt = Math.floor(Math.random() * 15) + 1
    console.log(rndInt)



    function changeHandler(e) {
        setInput(e.target.value)
    }

    React.useEffect(() => {
        if (input && !submitClicked) {
            var getData = setTimeout(() => {
                navigate(`/search`)
                dispatch({ type: "search_saga", action: { query: input, page: 1 } });
            }, 2000)

        }
        return () => clearTimeout(getData)
    }, [input])


    function submitHandler(e) {
        e.preventDefault()
        setSubmitClicked(true)
        navigate(`/search`)
        dispatch({ type: "search_saga", action: { query: input, page: 1 } });
    }


    let posterImage = `https://image.tmdb.org/t/p/original/${popularMovie?.[rndInt]?.backdrop_path}`
    

    const styles = {
        paperContainer: {
            backgroundImage: `url(${posterImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: "white",
            minHeight: "400px"
        }
    };
    return (
        <Container style={{ maxWidth: "70%" }} >
            <Grid className='background' container style={styles.paperContainer} p={3}>
                <Grid item sx={{ display: 'flex', alignItems: 'center', }} lg={12} xl={12} >
                    <Stack spacing={2} sx={{ width: "100%" }}>
                        <Typography variant='h2' sx={{ fontWeight: "700", fontSize: "35.2px" }}> Welcome. </Typography>
                        <Typography variant='p' sx={{ fontWeight: "500", fontSize: "35.2px" }}>Millions of movies, TV shows and people to discover. Explore now.</Typography>

                        <Paper component="form" sx={{ p: '2px 4px', width: "100%", borderRadius: "50px" }}>
                            {/* <form onSubmit={submitHandler}> */}

                            <input ref={ref} onChange={changeHandler} style={{ ml: 1, flex: 1, width: "90%", height: "30px", border: 0, outline: "none" }} placeholder="Search for a movie, tv show, person....." />

                            <IconButton onClick={submitHandler} type='submit' color="primary" sx={{ p: '10px', left: 0 }} aria-label="directions">
                                <DirectionsIcon />
                            </IconButton>
                            {/* </form> */}

                        </Paper>
                    </Stack>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={8} md={9} lg={12} >

                <Typography variant='h2' sx={{ fontSize: "30.2px", mt: "25px", mb: "25px" }}> Trending. </Typography>
                {/* ///////// Slider */}
                <Stack spacing={2} direction="row" sx={{ overflowX: "auto", mb: 3 }}>
                    {popularMovie ? popularMovie.map((curr, index) => {
                        return <HomePageCards
                            key={`${curr.id}-${index}`}
                            data={curr}
                        />
                    }) : []}

                </Stack>
            </Grid>




        </Container >
    );
}