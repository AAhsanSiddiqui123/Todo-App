import React from 'react';
import Typography from '@mui/material/Typography';


const Button = (props) => {

 const  style={
    loadBtn:{
         width: "100%",
         height: "50px", 
         backgroundColor: "#00B4E4", 
         border: 0, 
         marginTop: "12px", 
         cursor: "pointer", 
         borderRadius: 5 
    }
}



  return (
    <button style={style.loadBtn} onClick={props.loadMoreHandler}>
      <Typography variant="h5" sx={{ color: "white", mt: 1 }} gutterBottom> Load More  </Typography>
    </button>
  )
}

export default Button

