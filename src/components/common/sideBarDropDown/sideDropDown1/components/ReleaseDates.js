import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from '@mui/material/Checkbox';

const ReleaseDates = (props) => {
  
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

        props.AvailableReleaseCheckBox(availMultiCheckBox)
    }

    return (
        <>
            <FormControlLabel sx={{ mb: -2 }} value="1" onChange={multiCheckBoxHandler} control={<Checkbox size="small" />} label="Premiere" />
            <FormControlLabel sx={{ mb: -2 }} value="2" onChange={multiCheckBoxHandler} control={<Checkbox size="small" />} label="Theatrical (limited)" />
            <FormControlLabel sx={{ mb: -2 }} value="3" onChange={multiCheckBoxHandler} control={<Checkbox size="small" />} label="Theatrical" />
            <FormControlLabel sx={{ mb: -2 }} value="4" onChange={multiCheckBoxHandler} control={<Checkbox size="small" />} label="Digital" />
            <FormControlLabel sx={{ mb: -2 }} value="5" onChange={multiCheckBoxHandler} control={<Checkbox size="small" />} label="Physical" />
            <FormControlLabel sx={{ mb: 2 }} value="6" onChange={multiCheckBoxHandler} control={<Checkbox size="small" />} label="TV" />
        </>
    )
  
}

export default ReleaseDates
