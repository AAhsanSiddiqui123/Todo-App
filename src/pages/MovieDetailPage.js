
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import CardMedia from '@mui/material/CardMedia';
import DetailPeopleCard from "../components/common/cards/DetailPeopleCard";
import Chips from "../components/common/sideBarDropDown/sideDropDown1/components/Chips";
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';


import { axiosService } from "../Services/axios.service";
import { Get_MovieDetail_url } from "../Services/url";
import { useDispatch, useSelector } from 'react-redux';
import { magageStateAction } from "../Store/reducers/manageState";
import { movieActionCreater } from "../Store/reducers/movieReducer";


import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarIcon from '@mui/icons-material/Star';

import CircularStatic from "../components/common/RatingLoader"




const DetailPage = () => {
    const [state, setState] = React.useState({})
    let id = useParams();



    const dispatch = useDispatch();
    let topCast = useSelector((state) => state.movieReducer.topCase);
    let reviews = useSelector((state) => state.movieReducer.reviews);
    let isLoading = useSelector((state) => state.stateReducer.isLoading);
    let topCastIsLoading = useSelector((state) => state.stateReducer.topCastIsLoading);


    React.useEffect(() => {
        dispatch(movieActionCreater.loadMoreClickedHandler(false))
        dispatch(magageStateAction.updateHandler(true))
        axiosService({
            method: "GET",
            url: `${Get_MovieDetail_url}/${id.id}`,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US" }
        }).then((res) => {
            dispatch(magageStateAction.updateHandler(false))

            dispatch({ type: "get_cast_saga", payload: res.data.id })
            dispatch({ type: "get_Review_saga", payload: res.data.id })

            setState(res.data);
        })

    }, [])


    var movieRealeseyear = (new Date(state.release_date)).getFullYear();
    let country = state?.production_countries?.[0]?.iso_3166_1
    let posterImage = `https://image.tmdb.org/t/p/original/${state?.backdrop_path}`

    var month = (new Date(reviews?.[0]?.created_at)).getUTCMonth() + 1;
    var day = (new Date(reviews?.[0]?.created_at)).getUTCDate();
    var year = (new Date(reviews?.[0]?.created_at)).getFullYear();

    const styles = {
        paperContainer: {
            backgroundImage: `url(${posterImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        },
        grid: {
            alignItems: "center",
            justifyContent: "center",
            p: 3,
            color: "white"
        }
    };
    return (
        <>

            {/* /////////////////////////////////////////////////////////////////////////////////// Section 1 */}



            <Grid className='background' mt="30px" container spacing={2} sx={styles.grid} style={                       styles.paperContainer}>


                {!isLoading ?
                    <>
                        <Grid item xs={0} sm={4} md={3} lg={2.5} xl={2.5} sx={{}}  >
                            <CardMedia
                                component="img"
                                sx={{
                                    borderRadius: 2, minHeight: "100px", height: "440px",
                                    //  width: "300px"
                                }}
                                alt="green iguana"
                                image={`https://image.tmdb.org/t/p/w500/${state?.poster_path}`}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                            <Box>
                                <Typography variant='h2' sx={{ fontWeight: "700", fontSize: "35.2px" }}> {state.original_title} {`(${movieRealeseyear})` || ""} </Typography>
                                <Box>
                                    <Typography variant='p'>{state.release_date} {`(${country})`}</Typography>
                                    {
                                        state.genres ? state.genres.map((curr, i) => {
                                            return <Typography variant='p' key={i}> {curr.name} </Typography>
                                        }) : []
                                    }
                                    <Typography variant='p'>{` ${state.runtime}m`} </Typography>

                                </Box>
                            </Box>
                            <Stack sx={{ mt: 2 }} direction="row" spacing={2}>
                                {/* <Fab><CircularStatic rating={7.55}/></Fab> */}
                                <Fab sx={{ bgcolor: "#032541", color: "white" }} aria-label="add" size="small"><MenuIcon sx={{ fontSize: "small" }} /></Fab>
                                <Fab sx={{ bgcolor: "#032541", color: "white" }} aria-label="add" size="small"><FavoriteIcon sx={{ fontSize: "small" }} /></Fab>
                                <Fab sx={{ bgcolor: "#032541", color: "white" }} aria-label="add" size="small"><BookmarkBorderIcon sx={{ fontSize: "small" }} /></Fab>
                                <Fab sx={{ bgcolor: "#032541", color: "white" }} aria-label="add" size="small"><StarIcon sx={{ fontSize: "small" }} /></Fab>
                            </Stack>
                            <Box sx={{ mt: 3 }}>
                                <Typography variant='h3' sx={{ fontSize: "18.2px", mt: 1 }}>Forever </Typography>
                                <Typography variant='h3' sx={{ fontSize: "18.2px", fontWeight: "700", mt: 1 }}>Overview </Typography>
                                <Typography variant='p' sx={{ mt: 1 }}>{state.overview}</Typography>
                                <Stack direction="row" spacing={20} sx={{ display: "flex", mt: 3 }}>
                                    {/* <Typography variant='p'><strong>Status</strong><br />{state.status}</Typography>
                            <Typography variant='p'><strong>Original Language</strong><br />{state?.spoken_languages?.[0]?.english_name} </Typography>
                            <Typography variant='p'><strong>Budget</strong><br />{state.budget}</Typography>
                            <Typography variant='p'><strong>Revenue</strong><br />{state.revenue}</Typography> */}

                                </Stack>
                            </Box>
                        </Grid> </> : <CircularProgress />}

            </Grid>



            {/* /////////////////////////////////////////////////////////////////////////////////// Section 2 */}

            <Container maxWidth="xl" sx={{ mt: 4 }}>

                <Typography variant='p' component="div" sx={{ fontSize: "20px", mt: 4 }}><strong>Top Billed Cast</strong></Typography>

                {/* ////////////////////// */}
                {/* First Grid Item */}
                {/* ////////////////////// */}

                <Grid container spacing={2} sx={{ mt: 2 }} >
                    <Grid item xs={12} sm={8} md={9} >

                        {/* ///////// Slider */}
                        <Stack spacing={2} direction="row" sx={{ overflowX: "auto", mb: 3 }}>
                            {!topCastIsLoading ?
                                topCast.map((curr) => {
                                    return <DetailPeopleCard
                                        key={curr.id}
                                        cast={curr} />
                                }) : <CircularProgress />

                            }

                        </Stack>

                        <Typography variant='p' sx={{ fontSize: "20px" }}><strong>Top Billed Cast</strong></Typography>
                        <hr style={{ marginTop: "30px", marginBottom: "30px" }} />
                        <Stack spacing={3} direction="row">
                            <Typography variant='p' sx={{ fontSize: "20px" }}><strong>Social</strong></Typography>
                            <Typography variant='p' sx={{ fontSize: "20px" }}><strong>Reviews {`(${reviews?.length})`}</strong></Typography>

                        </Stack>


                        {/* ///// Review Section */}
                        <Box sx={{
                            display: 'flex', flexWrap: 'wrap',
                            '& > :not(style)': { m: 1, width: "100%" },
                        }} >
                            <Paper elevation={7} sx={{ p: 4 }} >
                                <Stack direction="row" spacing={2}>
                                    <Avatar alt="Travis Howard" />
                                    <Stack spacing={2}>
                                        <Typography variant='p'><strong>A review by {reviews?.[0]?.author}</strong><br />Written by  {reviews?.[0]?.author} on {`${year}-${month}-${day}`}</Typography>
                                        <Typography variant='p'>{`${reviews?.[0]?.content.substring(0, 600)}...`}</Typography>
                                    </Stack>

                                </Stack>
                            </Paper>
                        </Box>

                    </Grid>

                    {/* ////////////////////// */}
                    {/* Second Grid Item */}
                    {/* ////////////////////// */}

                    <Grid item xs={12} sm={4} md={3} sx={{ p: 3 }}>
                        <Stack direction="row" spacing={3}>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <LinkIcon />
                        </Stack>

                        <Stack direction="column" spacing={3} sx={{ mt: 3, mb: 2 }}>
                            <Typography variant='p'><strong>Status</strong><br />{state.status}</Typography>
                            <Typography variant='p'><strong>Original Language</strong><br />{state?.spoken_languages?.[0]?.english_name} </Typography>
                            <Typography variant='p'><strong>Budget</strong><br />{state.budget}</Typography>
                            <Typography variant='p'><strong>Revenue</strong><br />{state.revenue}</Typography>
                        </Stack>


                        <Typography variant='p'><strong>Keywords</strong></Typography>
                        <Box sx={{
                            display: 'flex', justifyContent: 'center', flexWrap: 'wrap', listStyle: 'none',
                            p: 0.5,
                            mb: 2,
                        }}
                            component="ul"
                        >
                            <Chips chipHandler={()=>{}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default DetailPage




// let url;
// let castSaga;
// let reviewSaga;
// if(params.tag === "movie"){
//     url = Get_MovieDetail_url;
//     castSaga = "get_cast_saga";
//     reviewSaga = "get_Review_saga"
// }else if (params.tag === "tv"){
//     url = Get_TvDetail_url;
//     castSaga = "get_tvCast_saga";
//     reviewSaga = "get_TvReview_saga"
// }