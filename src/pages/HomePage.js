import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';





export default function HomePage(props) {


    let posterImage = `https://cdn.pixabay.com/photo/2023/01/21/13/39/night-sky-7733876_960_720.jpg`

    const styles = {
        paperContainer: {
            backgroundImage: `url(${posterImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
    };
    return (
        <Container style={{ maxWidth: "80%" }} >
            <Grid className='background' mt="30px" container spacing={2} style={styles.paperContainer}>

        

            <h1>hell</h1>
            </Grid>
        </Container>
    );
}