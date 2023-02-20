import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';





export default function HomePage(props) {


    let posterImage = `https://cdn.pixabay.com/photo/2023/01/21/13/39/night-sky-7733876_960_720.jpg`

    const styles = {
        paperContainer: {
            backgroundImage: `url(${posterImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: "white"
        }
    };
    return (
        <Container style={{ maxWidth: "80%" }} >
            <Grid className='background' mt="30px" container spacing={2} style={styles.paperContainer}>
                <h1>WellCome</h1>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >

                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />

                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                        <DirectionsIcon />
                    </IconButton>
                </Paper>
       

        </Grid>
        </Container >
    );
}