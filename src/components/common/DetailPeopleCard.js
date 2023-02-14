import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaCard(props) {

  return (
    <Card sx={{ minWidth: "140px", height: "280px", borderRadius: "7px", mb: 3}}>
      <CardMedia
        sx={{ height: 175 }}
        image={`https://image.tmdb.org/t/p/w500/${props.cast.profile_path}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 15, fontWeight: 700}}>
         {props.cast.original_name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 15}}>
         {props.cast.character}
        </Typography>
      </CardContent>
    </Card>
  );
}