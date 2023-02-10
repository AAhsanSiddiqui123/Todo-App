
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Get_MovieDetail_url } from "../Services/url";
import { axiosService } from "../Services/axios.service";
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import Chip from '@mui/material/Chip';
import CardMedia from '@mui/material/CardMedia';
import DetailPeopleCard from "../components/common/DetailPeopleCard";


const DetailPage = () => {
    const [state, setState] = React.useState({})
    let id = useParams();

    console.log(`${Get_MovieDetail_url}/${id.id}`)

    React.useEffect(() => {
        axiosService({
            method: "GET",
            url: `${Get_MovieDetail_url}/${id.id}`,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US" }
        }).then((res) => {
            console.log(res.data);
            setState(res.data);
        })

    }, [])


    var year = (new Date(state.release_date)).getFullYear();
    let country = state?.production_countries?.[0]?.iso_3166_1
    let posterImage = `https://image.tmdb.org/t/p/original/${state.poster_path}`

    const styles = {
        paperContainer: {
            backgroundImage: `url(${posterImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
    };
    return (
        <>

            {/* ////////////////////////////////////////////////////////// Section 1 */}

            <Grid container spacing={2} sx={{ backgroundColor: "lightblue", alignItems: "center", justifyContent: "center", p: 4, color: "white" }} style={styles.paperContainer }>

                <Grid item xs={6} md={3} >
                    <CardMedia
                        component="img"
                        sx={{ borderRadius: 5 }}
                        alt="green iguana"
                        image={`https://image.tmdb.org/t/p/w500/${state.poster_path}`}
                    />
                </Grid>
                <Grid item xs={6} md={8}>
                    <Box>
                        <Typography variant='h2' sx={{ fontWeight: "700", fontSize: "35.2px" }}> {state.original_title} {`(${year})` || ""} </Typography>
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
                        <Fab color="primary" aria-label="add" size="small">
                            <AddIcon />
                        </Fab>
                        <Fab color="primary" aria-label="add" size="small">
                            <AddIcon />
                        </Fab>
                        <Fab color="primary" aria-label="add" size="small">
                            <AddIcon />
                        </Fab>
                        <Fab color="primary" aria-label="add" size="small">
                            <AddIcon />
                        </Fab>
                    </Stack>
                    <Box sx={{ mt: 3 }}>
                        <Typography variant='h3' sx={{ fontSize: "18.2px", mt: 1 }}>Forever </Typography>
                        <Typography variant='h3' sx={{ fontSize: "18.2px", fontWeight: "700", mt: 1 }}>Overview </Typography>
                        <Typography variant='p' sx={{ mt: 1 }}>{state.overview}</Typography>
                        <Stack direction="row" spacing={20} sx={{ display: "flex", mt: 3 }}>
                            <Typography variant='p'><strong>Status</strong><br />{state.status}</Typography>
                            <Typography variant='p'><strong>Original Language</strong><br />{state?.spoken_languages?.[0]?.english_name} </Typography>
                            <Typography variant='p'><strong>Budget</strong><br />{state.budget}</Typography>
                            <Typography variant='p'><strong>Revenue</strong><br />{state.revenue}</Typography>

                        </Stack>
                    </Box>
                </Grid>

            </Grid>


            {/* ////////////////////////////////////////////////////////// Section 2 */}

            <Container maxWidth="xl" sx={{ backgroundColor: "lightcoral", mt: 4 }}>

                <Grid container spacing={2} sx={{  justifyContent: "center" }}>
                    <Grid item xs={6} md={8} sx={{ overflowX:"auto"}}>
                        <Stack spacing={2} direction="row">
                                <DetailPeopleCard />
                                <DetailPeopleCard />
                                <DetailPeopleCard />
                                <DetailPeopleCard />
                                <DetailPeopleCard />
                                <DetailPeopleCard />
                                <DetailPeopleCard />
                                <DetailPeopleCard />
           
                                
                                
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Stack direction="row" spacing={3}>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <LinkIcon />
                        </Stack>

                        <Stack direction="column" spacing={3}>
                            <Typography variant='p'><strong>Status</strong><br />{state.status}</Typography>
                            <Typography variant='p'><strong>Original Language</strong><br />{state?.spoken_languages?.[0]?.english_name} </Typography>
                            <Typography variant='p'><strong>Budget</strong><br />{state.budget}</Typography>
                            <Typography variant='p'><strong>Revenue</strong><br />{state.revenue}</Typography>
                        </Stack>


                        <Chip label="Basic" />


                    </Grid>

                </Grid>
            </Container>

        </>
    )
}

export default DetailPage