import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  let t = 20;
  return (
    <Box sx={{ position: "relative", display: "inline-flex", marginTop: "-40px", marginLeft:"10px" }} bgcolor="lightblue" borderRadius="100px">
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "lightBlue"
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary" >
          {`${t}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(70);
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
