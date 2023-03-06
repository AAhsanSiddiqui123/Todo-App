
import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
 let mRating =  Math.round(props.value)
 let circleColor;

 if(mRating >= 60 && mRating <= 100){
  circleColor = "success"
 }else if(mRating > 40 && mRating < 60){
  circleColor = "warning"
 }

const styles={
  Loader:{ 
    position: "relative", 
    display: "inline-flex", 
    marginTop: "-40px", 
    marginLeft:"10px"
   }}
 

  return (
    <Box sx={styles.Loader} bgcolor="black" borderRadius="100px">
      <CircularProgress color={circleColor} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" style={{color: "white"}} >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {

  const [progress, setProgress] = React.useState(0);


  React.useEffect(() => {

      setProgress(props.rating * 10);
  

  }, []);

  return <CircularProgressWithLabel value={progress} />;
}

