import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Height } from '@mui/icons-material';
import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import HomePageCards from "../components/common/cards/HomePageCards";
import { useSelector, useDispatch } from 'react-redux';
import { movieActionCreater } from "../Store/reducers/movieReducer";


let rndInt;
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


    // function changeHandler(e) {
    //     setInput(e.target.value)
    // }

    React.useEffect(() => {
        rndInt = Math.floor(Math.random() * 15) + 1
        dispatch(movieActionCreater.loadMoreClickedHandler(false))

    }, [])

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


    let posterImage =popularMovie?.[0]?.backdrop_path ? `https://image.tmdb.org/t/p/original/${popularMovie?.[rndInt]?.backdrop_path}` : "#";


    const styles = {
        paperContainer: {
            backgroundImage: `url(${posterImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: "white",
            minHeight: "400px"
        },
        inputField: {
            width: "90%",
            height: "30px",
            border: 0,
            outline: "none",
            borderRadius: "50px",
        },
        inputField: {
            width: "100%",
            "& .MuiInputBase-root": {
              borderRadius: "50px",
              paddingRight: "0px",
              height:"46px",
              backgroundColor:"white"
            }
          }

    };

    return (
        <Container sx={{ maxWidth: {xl: "70%", lg:"70%", md:"70%", sm:"70%", xm:"100%"}}} >
            <Grid className='background' container style={styles.paperContainer} p={3}>
                <Grid item sx={{ display: 'flex', alignItems: 'center', }} xm={12} sm={12} md={12} lg={12} xl={12} >
                    <Stack spacing={2} sx={{ width: "100%" }}>
                        <Typography variant='h2' sx={{ fontWeight: "700", fontSize: "35.2px" }}> Welcome. </Typography>
                        <Typography variant='p' sx={{ fontWeight: "500", fontSize: "35.2px", fontSize:{xl: "32px", lg:"35.2px", md:"35.2px", sm:"35.2px", xm:"35.2px"} }}>Millions of movies, TV shows and people to discover. Explore now.</Typography>

                        <Box
                            component="form"
                            onSubmit={submitHandler}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                placeholder='Search for a movie, tv show, person......'
                                InputLabelProps={{ shrink: false }}
                                id="input-with-icon-textfield"
                                sx={styles.inputField}
                                onChange={(e) => setInput(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment className='searchbtn' position="start" sx={{ height: "46px", marginRight: "0px" }}>
                                            <Button type="submit" variant="contained" sx={{ height: "46px", borderRadius: "50px" }}>Search</Button>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                        </Box>



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