import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function NestedDropDown() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "100%" }} style={{ overflow: "unset" }}>
        <InputLabel>Chip</InputLabel>
        <Select
          style={{ width: "100%" }}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {<FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Show Me
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              sx={{ mb: 2.5 }}
            >
              <FormControlLabel
                sx={{ mb: -2 }}
                value="Everything"
                control={<Radio />}
                label="Everything"
              />
              <FormControlLabel
                sx={{ mb: -2 }}
                disabled
                value="Movies I Haven't Seen"
                control={<Radio />}
                label="Movies I Haven't Seen"
              />
              <FormControlLabel
                sx={{ mb: -2 }}
                disabled
                value="Movies I Have Seen"
                control={<Radio />}
                label="Movies I Have Seen"
              />
            </RadioGroup>
            <hr />
            <FormGroup>
            <FormLabel sx={{ mt: 1 }} id="demo-radio-buttons-group-label">Availabilities </FormLabel>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            </FormGroup>
          </FormControl>}
        </Select>
      </FormControl>
    </div>
  );
}






