import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';





const Footer = () => {
  return (
    <Stack mt="20px" sx={{ backgroundColor: "#032541", color: "white", display: "flex", alignItems: "center" }}>
      <Stack sx={{ width: "70%", p: 5 }} direction="row" spacing={8}>
        <Stack sx={{ ml: "5px" }} spacing={6}>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDB)" width="200" height="100" />
          <Button variant="contained">Contained</Button>
        </Stack>

        {/* <Stack sx={{}} direction="row" spacing={8}> */}
        <Grid container>
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <Stack sx={{ lineHeight: "1.4em" }} >
              <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: "1.4em" }}><strong>Budget</strong></Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={3}>
            <Stack sx={{ lineHeight: "1.4em" }}>
              <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: "1.4em" }}><strong>Budget</strong></Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={3}>
            <Stack sx={{ lineHeight: "1.4em" }}>
              <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: "1.4em" }}><strong>Budget</strong></Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
              <Typography variant='p'>Revenue</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={3}>
            <Stack sx={{ lineHeight: "1.4em" }}>
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
  )
}

export default Footer

