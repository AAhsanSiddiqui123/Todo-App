import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const Footer = () => {
  return (
    <Stack sx={{ backgroundColor: "#032541",color:"white", height: "300px", display:"flex", alignItems:"center" }}>
      <Stack sx={{ width: "70%", p: 5 }} direction="row" spacing={8}>
        <Stack sx={{ml:"5px" }} spacing={6}>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDB)" width="200" height="100" />
          <Button variant="contained">Contained</Button>
        </Stack>

        <Stack sx={{}} direction="row" spacing={8}>
          <Stack sx={{ lineHeight: "1.4em" }}>
            <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: "1.4em" }}><strong>Budget</strong></Typography>
            <Typography variant='p'>Revenue</Typography>
            <Typography variant='p'>Revenue</Typography>
            <Typography variant='p'>Revenue</Typography>
            <Typography variant='p'>Revenue</Typography>
            <Typography variant='p'>Revenue</Typography>
          </Stack>
          <Stack sx={{ lineHeight: "1.4em" }}>
            <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: "1.4em" }}><strong>Budget</strong></Typography>
            <Typography variant='p'>Revenue</Typography>
            <Typography variant='p'>Revenue</Typography>
            <Typography variant='p'>Revenue</Typography>
          </Stack>
          <Stack sx={{ lineHeight: "1.4em" }}>
            <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: "1.4em" }}><strong>Budget</strong></Typography>
            <Typography variant='p'>Revenue</Typography>
            <Typography variant='p'>Revenue</Typography>
            <Typography variant='p'>Revenue</Typography>
            <Typography variant='p'>Revenue</Typography>
          </Stack>
          <Stack sx={{ lineHeight: "1.4em" }}>
            <Typography variant='h3' sx={{ fontWeight: "bold", fontSize: "1.4em" }}><strong>Budget</strong></Typography>
            <Typography variant='p'>Revenue</Typography>
            <Typography variant='p'>Revenue</Typography>
            <Typography variant='p'>Revenue</Typography>
          </Stack>
        </Stack>

      </Stack>

    </Stack>
  )
}

export default Footer

