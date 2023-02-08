import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import style from "../../pages/HeroSection.module.css"
import CircularStatic from "./RatingLoader"
import { Box } from '@mui/system';


export default function MovieCard(props) {
    return (
        <div className={style.card}>
            <Card sx={{ height: "370px"}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="270"
                    image={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`}
                />
                <CircularStatic />
                <CardContent>

                    <Typography gutterBottom component="div" sx={{ fontSize: 15, fontWeight: 600 }} >
                        <strong>{props.data.original_title}</strong>
                    </Typography>

                    <Typography gutterBottom variant="h8" component="div" sx={{ fontSize: 15 }} >
                        {props.data.release_date}
                    </Typography>

                </CardContent>
                {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </div>
    );
}