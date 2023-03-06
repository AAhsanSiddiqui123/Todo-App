import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import style from "../../../pages/HeroSection.module.css"
import CircularStatic from "../RatingLoader"
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



export default function SearchCard(props) {
    const navigate = useNavigate();

    function clickHandler() {
        navigate(`/${props.data.media_type}/${props.data.id}`)
    }
    return (
        <Container>

            <Stack className={style.card} style={{ cursor: "pointer" }} onClick={clickHandler}  mb={2} mt={2}>
                <Stack direction="row" spacing={2}>
                    <Card sx={{ height: "150px", minWidth: "100px" }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="150"
                            width="100"
                            image={props.data.poster_path  ? `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`: "#"}

                        />


                    </Card>
                    <Box sx={{ p: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>

                        <Typography gutterBottom component="p" sx={{ fontSize: 15, fontWeight: 700, lineHeight: "1.1rem" }} >
                            <strong>{props.data.original_title || props.data.original_name}</strong>
                        </Typography>

                        <Typography gutterBottom variant="h8" component="div" sx={{ fontSize: 13 }} >
                        {`${props?.data?.overview?.substring(0, 200)}...`}
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </Container>
    );
}