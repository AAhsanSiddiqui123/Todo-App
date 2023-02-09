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
function valuetextSlider3(value) {
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



function valuetext(value) {
  return `${value}°C`;
}

export default function SideVarDropDown1(props) {

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

  const queryQbj={
    air_date : null,
    air_date  : "2023-08-09",
    certification: null,
    certification_country: "PK",
    debug: null,
    first_air_date : null,
    first_air_date  : null,
    ott_region: "PK",
    page: 1,
    primary_release_date : null,
    primary_release_date  : null,
    region: null,
    release_date : "2023-02-22",
    release_date  : "2023-08-22",
    show_me: 0,
    sort_by: null,
    vote_average : 0,
    vote_average  : 10,
    vote_count : 0,
    with_genres: [12,35,37],
    with_keywords: null,
    with_networks: null,
    with_origin_country: null,
    with_original_language: null,
    with_ott_monetization_types: null,
    with_ott_providers: null,
    with_release_type: null,
    with_runtime : 0,
    with_runtime  : 400,

  }



  /////// Slide Bars
  const [valueSlider1, setValueSlider1] = React.useState([20, 37]);
  const handleChangeSlider1 = (event, newValue) => {
    setValueSlider1(newValue);
  };

  const [valueSlider2, setValueSlider2] = React.useState(45);
  const handleChangeSlider2 = (event, newValue) => {
    setValueSlider2(newValue);
  };

  const [valueSlider3, setValueSlider3] = React.useState([20, 37]);
  const handleChangeSlider3 = (event, newValue) => {
    setValueSlider3(newValue);
  };

  // console.log(valueSlider1)
  // console.log(valueSlider2)
  // console.log(valueSlider3)

  ////Show me
  const [showme, setShowMe] = React.useState('Everything');
  const showMeHandler = (event) => {
    console.log(event.target.value)
    // setShowMe(event.target.value);
  };

  ////Availablity
  const [availchecked, setToglleAvailablityChecked] = React.useState(false);
  const AvailablityHandler = (event) => {
    console.log(event.target.checked);
    setToglleAvailablityChecked(event.target.checked);
  };

  ////Release Dates
  const [releseDatesChecked, setToggleReleaseDates] = React.useState(false);
  const releaseDateHandler = (event) => {
    console.log(event)
    setToggleReleaseDates(event.target.checked);
  };

  const [date1, setDate1Value] = React.useState(dayjs('2014-08-18T21:11:54'));
  const date1handleChangeDate = (newValue) => {
    console.log(dayjs(newValue).format("YY-MM-DD"))
    //7.5/*10
    setDate1Value(newValue);
  };
  const [date2, setDate2Value] = React.useState(dayjs('2014-08-18T21:11:54'));
  const date1hand2eChangeDate = (newValue) => {
    console.log(newValue)
    setDate2Value(newValue);
  };




  props.querySelector()


  return (
    <div>
      <FormControl sx={{ p: 1, width: "100%" }} style={{ overflow: "unset" }}>
        {<FormControl >
          <p>Show me</p>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="0"
            name="radio-buttons-group"
            sx={{ mb: 2.5 }}
            onChange={showMeHandler}
          >
            <FormControlLabel
              sx={{ mb: -2 }}
              value="0"
              control={<Radio />}
              label="Everything"
            />
            <FormControlLabel
              sx={{ mb: -2 }}
              value="1"
              control={<Radio />}
              label="Movies Haven't Seen"
            />
            <FormControlLabel
              sx={{ mb: -2 }}
              value="2"
              control={<Radio />}
              label="Movies I Have Seen"
            />
          </RadioGroup>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
          <hr />
          <FormGroup >
            <FormLabel sx={{ mt: 1 }} id="demo-radio-buttons-group-label">Availabilities </FormLabel>
            <FormControlLabel control={
              <Checkbox
                checked={availchecked}
                onChange={AvailablityHandler}
                inputProps={{ 'aria-label': 'controlled' }}
              />} label="Search all availabilities?" />
            {availchecked && <AvailabilitiesCheckBox />}
          </FormGroup>

          {/* ///////////////////////////////////////////////////   Dates   ///////////////////////////////////////////// */}


          <hr />
          <FormGroup>
            <FormLabel sx={{ mt: 1, mb: 0 }} id="demo-radio-buttons-group-label">Release Dates </FormLabel>

            <FormControlLabel control={<Checkbox
              checked={releseDatesChecked}
              onChange={releaseDateHandler}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label="Search all releases?" />
            {releseDatesChecked && <ReleaseDates />}
          </FormGroup>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3} sx={{ mb: 4, mt: 3 }} >
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={date1}
                onChange={date1handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={date2}
                onChange={date1hand2eChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />

            </Stack>
          </LocalizationProvider>

          {/* //////////////////////////////////////////////////// Chips //////////////////////////////////////////// */}
          <hr />
          <FormGroup>
            <FormLabel sx={{ mt: 1 }} id="demo-radio-buttons-group-label">Genres </FormLabel>
          </FormGroup>
          {<Chips />}

          {/* ///////////////////////////////////////////////// User Score Slider /////////////////////////////////////////////// */}
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
          {/* /////////////////////////////////////////////////////// Minimum User Votes Slider///////////////////////////////////////// */}
          <hr />
          <FormGroup>
            <FormLabel sx={{ mt: 1 }} id="demo-radio-buttons-group-label">Minimum User Votes</FormLabel>
          </FormGroup>
          <Box>
            <Slider value={valueSlider2}
              onChange={handleChangeSlider2} 
              defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
          </Box>

          {/* ////////////////////////////////////////////////////  Runtime Slider    //////////////////////////////////////////// */}
          <hr />
          <FormGroup>
            <FormLabel sx={{ mt: 1 }} id="demo-radio-buttons-group-labeyy">Runtime  </FormLabel>
          </FormGroup>
          <Box sx={{ mt: 0 }}>
            <Slider
              getAriaLabel={() => 'emperature range'}
              value={valueSlider3}
              onChange={handleChangeSlider3}
              valueLabelDisplay="auto"
              getAriaValueText={valuetextSlider3}
            />
          </Box>
        </FormControl>}
      </FormControl>
    </div>
  );
}






//////////////////////////////////////////////////////////////////  Availablity Chec Box Component//////////////////////////
function AvailabilitiesCheckBox() {
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

  }
  console.log(availMultiCheckBox)
  return (
    <>
      <FormControlLabel sx={{ mb: -2 }} value="Stream" onChange={multiCheckBoxHandler} control={<Checkbox />} label="Stream" />
      <FormControlLabel sx={{ mb: -2 }} value="Free" onChange={multiCheckBoxHandler} control={<Checkbox />} label="Free" />
      <FormControlLabel sx={{ mb: -2 }} value="Adds" onChange={multiCheckBoxHandler} control={<Checkbox />} label="Adds" />
      <FormControlLabel sx={{ mb: -2 }} value="Rent" onChange={multiCheckBoxHandler} control={<Checkbox />} label="Rent" />
      <FormControlLabel value="Buy" onChange={multiCheckBoxHandler} control={<Checkbox />} label="Buy" />
    </>
  )
}


//////////////////////////////////////////////////////////////////// Release Dates Components   ////////////////////////
function ReleaseDates() {
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

  }

  console.log(availMultiCheckBox)
  return (
    <>
      <FormControlLabel sx={{ mb: -2 }} value="Premiere" onChange={multiCheckBoxHandler} control={<Checkbox />} label="Premiere" />
      <FormControlLabel sx={{ mb: -2 }} value="Theatrical (limited)" onChange={multiCheckBoxHandler} control={<Checkbox />} label="Theatrical (limited)" />
      <FormControlLabel sx={{ mb: -2 }} value="Theatrical" onChange={multiCheckBoxHandler} control={<Checkbox />} label="Theatrical" />
      <FormControlLabel sx={{ mb: -2 }} value="Digital" onChange={multiCheckBoxHandler} control={<Checkbox />} label="Digital" />
      <FormControlLabel sx={{ mb: -2 }} value="Physical" onChange={multiCheckBoxHandler} control={<Checkbox />} label="Physical" />
      <FormControlLabel sx={{ mb: 2 }} value="TV" onChange={multiCheckBoxHandler} control={<Checkbox />} label="TV" />
    </>
  )
}






