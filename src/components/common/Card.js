import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import style from "../../pages/HeroSection.module.css"
import CircularStatic from "./RatingLoader"
import { useNavigate } from "react-router-dom";


export default function MovieCard(props) {
    const navigate = useNavigate();
    function clickHandler (){       
        navigate(`/detail/${props.data.id}`)
    }
    return (
        <div className={style.card} style={{cursor:"pointer"}} onClick={clickHandler}>
            <Card sx={{ height: "370px"}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="270"
                    image={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`}
                />
                <CircularStatic rating={props.data.vote_average} />
                <CardContent>

                    <Typography gutterBottom component="div" sx={{ fontSize: 15, fontWeight: 600 }} >
                        <strong>{props.data.original_title || props.data.original_name}</strong>
                    </Typography>

                    <Typography gutterBottom variant="h8" component="div" sx={{ fontSize: 15 }} >
                        {props.data.release_date || props.data.first_air_date}
                    </Typography>

                </CardContent>

            </Card>
        </div>
    );
}