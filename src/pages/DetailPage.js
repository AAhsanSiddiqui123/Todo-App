
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

const DetailPage = () => {
    let data = useParams();


    React.useEffect(() => {
        axiosService({
            method: "GET",
            url: `${Get_MovieDetail_url}/${data.data}`,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US" }
        }).then((res) => {
            console.log(res);
        })

    }, [])


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <>

            {/* ////////////////////////////////////////////////////////// Section 1 */}

            <Grid container spacing={2} sx={{ backgroundColor: "lightblue", alignItems: "center", justifyContent: "center" }}>
                <Grid item xs={6} md={3}>
                    <Item>xs=6 md=8</Item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Box>
                        <Typography variant='h2' sx={{ fontWeight: "700", fontSize: "35.2px" }}> Black Panther: Wakanda Forever (2022) </Typography>
                        <Box>
                            <Typography variant='p' sx={{}}>11/11/2022 (US)
                                Action, Adventure, Science Fiction
                                2h 42m (2022) </Typography>
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
                    <Box>
                        <Typography variant='h3' sx={{ fontSize: "18.2px", mt: 1 }}>Forever </Typography>
                        <Typography variant='h3' sx={{ fontSize: "18.2px", fontWeight: "700", mt: 1 }}>Overview </Typography>
                        <Typography variant='p' sx={{ mt: 1 }}>Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda. </Typography>
                        <Stack direction="row" spacing={2} sx={{ display: "flex" }}>
                            <Typography variant='p'><strong>Status</strong><br />Released </Typography>
                            <Typography variant='p'><strong>Original Language</strong><br />English </Typography>
                            <Typography variant='p'><strong>Budget</strong><br />$250,000,0</Typography>
                            <Typography variant='p'><strong>Revenue</strong><br />$250,000,0 </Typography>

                        </Stack>
                    </Box>
                </Grid>

            </Grid>


            {/* ////////////////////////////////////////////////////////// Section 2 */}

            <Container maxWidth="xl" sx={{ backgroundColor: "lightcoral", mt: 4 }}>
                <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Stack direction="row" spacing={3}>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <LinkIcon />
                        </Stack>

                        <Stack direction="column" spacing={3}>
                            <Typography variant='p'><strong>Status</strong><br />Released </Typography>
                            <Typography variant='p'><strong>Original Language</strong><br />English </Typography>
                            <Typography variant='p'><strong>Budget</strong><br />$250,000,0</Typography>
                            <Typography variant='p'><strong>Revenue</strong><br />$250,000,0 </Typography>
                        </Stack>

                       
                        <Chip label="Basic" />
                        

                    </Grid>

                </Grid>
            </Container>

        </>
    )
}

export default DetailPage