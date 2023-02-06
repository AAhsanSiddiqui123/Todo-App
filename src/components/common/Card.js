import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import style from "../../pages/HeroSection.module.css"
import CircularStatic from "./RatingLoader"


export default function MovieCard(props) {
    return (
        // <div className={style.card}>
            <Card sx={{ height: "400px"}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`}
                />
                <CircularStatic />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div" >
                        <strong>{props.data.original_title}</strong>
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div" >
                        {props.data.release_date}
                    </Typography>

                </CardContent>
                {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        // </div>
    );
}