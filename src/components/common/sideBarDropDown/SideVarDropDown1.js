import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import FormControl from "@mui/material/FormControl";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Chips from "./Chips"


import Slider from '@mui/material/Slider';
function valuetextSlider1(value) {
  return `${value}°C`;
}
function valuetextSlider2(value) {
  return `${value}°C`;
}


const ITEM_HEIGHT = 400;
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

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function NestedDropDown() {

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };

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

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };


  const [valueSlider1, setValueSlider1] = React.useState([20, 37]);
  const handleChangeSlider1 = (event, newValue) => {
    setValueSlider1(newValue);
  };
  const [valueSlider2, setValueSlider2] = React.useState([20, 37]);
  const handleChangeSlider2 = (event, newValue) => {
    setValueSlider2(newValue);
  };

  return (
    <div>
      <FormControl sx={{ p:1 , width: "100%" }} style={{ overflow: "unset" }}>
        {<FormControl >

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
              value="Movies Haven't Seen"
              control={<Radio />}
              label="Movies Haven't Seen"
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


          <hr />
          <FormGroup>
            <FormLabel sx={{ mt: 1, mb: 0 }} id="demo-radio-buttons-group-label">Release Dates </FormLabel>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          </FormGroup>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3} sx={{ mb: 4 }} >
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />

            </Stack>
          </LocalizationProvider>

          <hr />
          <FormGroup>
            <FormLabel sx={{ mt: 1 }} id="demo-radio-buttons-group-label">Genres </FormLabel>
          </FormGroup>

          {<Chips />}

          <hr />
          <FormGroup>
            <FormLabel sx={{ mt: 1 }} id="demo-radio-buttons-group-label">User Score </FormLabel>
          </FormGroup>
          <Box sx={{ mt: 0 }}>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={valueSlider1}
              onChange={handleChangeSlider1}
              valueLabelDisplay="auto"
              getAriaValueText={valuetextSlider1}
            />
          </Box>

          <hr />
          <FormGroup>
            <FormLabel sx={{ mt: 1 }} id="demo-radio-buttons-group-label">hlkjh   </FormLabel>
          </FormGroup>
          <Box >
            <Slider
              aria-label="Custom marks"
              defaultValue={20}
              getAriaValueText={valuetext}
              step={10}
              valueLabelDisplay="auto"
              marks={marks}
            />
          </Box>

          
          <hr />
          <FormGroup>
            <FormLabel sx={{ mt: 1 }} id="demo-radio-buttons-group-labeyy">Runtime  </FormLabel>
          </FormGroup>
          <Box sx={{ mt: 0 }}>
            <Slider
              getAriaLabel={() => 'emperature range'}
              value={valueSlider2}
              onChange={handleChangeSlider2}
              valueLabelDisplay="auto"
              getAriaValueText={valuetextSlider2}
            />
          </Box>
        </FormControl>}
      </FormControl>
    </div>
  );
}






