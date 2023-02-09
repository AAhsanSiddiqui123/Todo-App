
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



const DetailPage = () => {
    let data = useParams()
    console.log(data.data)


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ height: "350px", backgroundColor: "lightblue", alignItems: "center", justifyContent: "center" }}>
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
                    <Stack sx={{ mt: 2  }} direction="row" spacing={2}>
                        <Fab color="primary" aria-label="add" size="medium">
                            <AddIcon />
                        </Fab>
                        <Fab color="primary" aria-label="add" size="medium">
                            <AddIcon />
                        </Fab>
                        <Fab color="primary" aria-label="add" size="medium">
                            <AddIcon />
                        </Fab>
                        <Fab color="primary" aria-label="add" size="medium">
                            <AddIcon />
                        </Fab>
                    </Stack>
                    <Box></Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default DetailPage