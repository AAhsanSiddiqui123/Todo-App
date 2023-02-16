import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { createTheme, responsiveFontSizes, ThemeProvider, } from '@mui/material/styles';


const theme = createTheme();

theme.typography.h3 = {
  // fontSize: '1.2rem',
  // '@media (max-width:800px)': {
  //   fontSize: '1.2rem',
  // },
  // '@media (max-width:600px)': {
  //   fontSize: '1.3rem',
  // },
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '2.4rem',
  // },
};

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>

      <Stack mt="20px" sx={{ backgroundColor: "#032541", color: "white", display: "flex", alignItems: "center" }}>
        <Stack sx={{ width: "70%", p: 5 }} direction="row" spacing={5}>

          <Grid container sx={{  }}>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={2} sx={{}}>
              <Stack sx={{ ml: "5px", width:"60%" }} spacing={3}>
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDB)"  height="100" />
                <Button variant="contained"  >Contained</Button>
              </Stack>
            </Grid>


            <Grid item xs={12} sm={4} md={3} lg={2} xl={2} >
              <Stack sx={{ lineHeight: "1.4em", mt:"10px" }} >
                <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: "1.4em" }}><strong>Budget</strong></Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4} md={3} lg={2} xl={2}>
              <Stack sx={{ lineHeight: "1.4em", mt:"10px"}}>
                <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: "1.4em" }}><strong>Budget</strong></Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4} md={3} lg={2} xl={2}>
              <Stack sx={{ lineHeight: "1.4em", mt:"10px"}}>
                <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: "1.4em" }}><strong>Budget</strong></Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4} md={3} lg={2} xl={2}>
              <Stack sx={{ lineHeight: "1.4em" ,mt:"10px"}}>
                <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: "1.4em" }}><strong>Budget</strong></Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
                <Typography variant='p'>Revenue</Typography>
              </Stack>
            </Grid>


          </Grid>


        </Stack>

      </Stack>
    </ThemeProvider>
  )
}

export default Footer

