import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from '@mui/material/Checkbox';

const Availablities = (props) => {
  const [availMultiCheckBox, setAvailMultiCheckBox] = React.useState([]);

  function multiCheckBoxHandler(e) {
    var index = availMultiCheckBox.indexOf(e.target.value);

    if (index != -1) {
      let newArray = availMultiCheckBox.filter((curr, i) => {
        return curr != e.target.value
      });
      availMultiCheckBox.splice(index, 1)
      setAvailMultiCheckBox([...newArray]);
    } else {
      setAvailMultiCheckBox([...availMultiCheckBox, e.target.value])
    }

    props.AvailableCheckBox(availMultiCheckBox)
  }
  return (
    <>
      <FormControlLabel sx={{ mb: -2 }} value="stream" onChange={multiCheckBoxHandler} control={<Checkbox size="small" />} label="Stream" />
      <FormControlLabel sx={{ mb: -2 }} value="free" onChange={multiCheckBoxHandler} control={<Checkbox size="small" />} label="Free" />
      <FormControlLabel sx={{ mb: -2 }} value="adds" onChange={multiCheckBoxHandler} control={<Checkbox size="small" />} label="Adds" />
      <FormControlLabel sx={{ mb: -2 }} value="rent" onChange={multiCheckBoxHandler} control={<Checkbox size="small" />} label="Rent" />
      <FormControlLabel value="buy" onChange={multiCheckBoxHandler} control={<Checkbox size="small" />} label="Buy" />
    </>
  )
}

export default Availablities
