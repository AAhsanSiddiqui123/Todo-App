import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function PeopleCards(props) {

  return (
    <Card sx={{ minWidth: "140px", height: "280px", borderRadius: "7px", mb: 3}}>
      <CardMedia
        sx={{ height: 220 }}
        image={`https://image.tmdb.org/t/p/w500/${props.data.profile_path}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 15, fontWeight: 700}}>
         {props.data.name}
        </Typography>
  
      </CardContent>
    </Card>
  );
}