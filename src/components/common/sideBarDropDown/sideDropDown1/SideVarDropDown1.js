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

import Chips from "./components/Chips";
import Availablities from "./components/Availablities";
import ReleaseDates from "./components/ReleaseDates"
import { useSelector, useDispatch } from 'react-redux';
import { discoverActionCreater } from '../../../../Store/reducers/discoverReducer';



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


function valuetext(value) {
  return `${value}°C`;
}



export default function SideVarDropDown1(props) {
  // const theme = useTheme();
  const dispatch = useDispatch();
  const [personName, setPersonName] = React.useState([]);
  let queryObj = useSelector((state)=>state.discoverReducer.queryObj);

  // console.log(queryObj);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };



  /////// Slide Bars
  const [valueSlider1, setValueSlider1] = React.useState([0, 7]);
  const handleChangeSlider1 = (event, newValue) => {
    console.log("change");
    dispatch(discoverActionCreater.userScoreHandler(event.target.value));
    props.querySelector();
    setValueSlider1(event.target.value);
  };

  const [valueSlider2, setValueSlider2] = React.useState(0);
  const handleChangeSlider2 = (event, newValue) => {
    console.log("change");
    console.log(event.target.value);
    dispatch(discoverActionCreater.minimumUserVotesHandler(event.target.value));
    props.querySelector();
    setValueSlider2(event.target.value);
  };

  const [valueSlider3, setValueSlider3] = React.useState([120, 180]);
  const handleChangeSlider3 = (event, newValue) => {
    console.log("change");
    dispatch(discoverActionCreater.runtimeHandler(event.target.value));
    props.querySelector();
    setValueSlider3(event.target.value);
  };



  ////Show me
  const [showme, setShowMe] = React.useState('Everything');
  const showMeHandler = (event) => {
    console.log("change");
    // console.log(event.target.value)
    // setShowMe(event.target.value);
  };




  ////Availablity
  const [availchecked, setToglleAvailablityChecked] = React.useState(false);
  const AvailablityHandler = (event) => {
    setToglleAvailablityChecked(!availchecked);
  };
  function AvailableCheckBox(checkbox) {
    console.log("change");
    dispatch(discoverActionCreater.queryObjHandler(checkbox));
    props.querySelector();
  }



  ////Release Dates
  const [releseDatesChecked, setToggleReleaseDates] = React.useState(false);
  const releaseDateHandler = (event) => {
    setToggleReleaseDates(!releseDatesChecked);
  };

  function AvailableReleaseCheckBox(checkbox) {
    console.log(checkbox);

    let num = Number(checkbox.join(''));
    let result = num.toLocaleString() + num.toString().slice(num.toString().indexOf('.'))
    console.log(result);
    dispatch(discoverActionCreater.releaseDateCheckBoxHandler(checkbox));
    props.querySelector();
  }

  const [date1, setDate1Value] = React.useState(dayjs('2014-08-18'));
  const dateFromChangeHandler = (newValue) => {
    console.log("change");
    dispatch(discoverActionCreater.fromDateHandler(newValue));
    props.querySelector();
    setDate1Value(newValue);
  };


  var dateObj = new Date();
  var month = ("0" + (dateObj.getMonth() + 1)).slice(-2); //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  let currDate = year + "-" + month + "-" + day;

  const [date2, setDate2Value] = React.useState(dayjs(currDate));
  const dateToHandler = (dateChange) => {
    console.log("change");
    let to = dayjs(dateChange).format("YYYY-MM-DD");

    let dateObj = {
      currDate: currDate,
      dateChange: dateChange
    }

    dispatch(discoverActionCreater.toDateHandler(dateObj));
    props.querySelector();
    setDate2Value(dateChange);
  };



  ////// chips
  function chipHandler(chipValues) {
    console.log("change");
    dispatch(discoverActionCreater.chipHandler(chipValues));
    props.querySelector()
  }
  // props.querySelector(queryObj);


  return (
    <div>
      <FormControl sx={{ p: 1, width: "100%" }} style={{ overflow: "unset" }}>
        {<FormControl >
          <p>Show me</p>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="0" name="radio-buttons-group" sx={{ mb: 2.5, fontSize: 10 }}
            onChange={showMeHandler} >

            <FormControlLabel sx={{ mb: -2 }} value="0" control={<Radio size="small" />}
              label={<span style={{ fontSize: '15px', whiteSpace: "nowrap" }}>Everything</span>}
            />
            <FormControlLabel disabled sx={{ mb: -2 }} value="1" control={<Radio size="small" />}
              label={<span style={{ fontSize: '15px', whiteSpace: "nowrap" }}>Movies Have't Seen</span>}
            />
            <FormControlLabel disabled sx={{ mb: -2 }} value="2" control={<Radio size="small" />}
              label={<span style={{ fontSize: '15px', whiteSpace: "nowrap" }}>Movies Have Seen</span>}
            />
          </RadioGroup>

          {/* /////////////////////////////////////////////////////// Availabilities ///////////////////////////////////////// */}
          <hr />
          <FormGroup >
            <FormLabel sx={{ mt: 1 }} id="demo-radio-buttons-group-label">Availabilities </FormLabel>
            <FormControlLabel control={
              <Checkbox
                size="small"
                defaultChecked
                // checked={availchecked}
                onChange={AvailablityHandler}
                inputProps={{ 'aria-label': 'controlled' }}
              />} label={<span style={{ fontSize: '15px' }}>Search All Availabilities?</span>} />
            {availchecked && <Availablities AvailableCheckBox={AvailableCheckBox} />}
          </FormGroup>

          {/* /////////////////////////////////////////////////// Dates   ///////////////////////////////////////////// */}


          <hr />
          <FormGroup>
            <FormLabel sx={{ mt: 1, mb: 0 }} id="demo-radio-buttons-group-label">Release Dates </FormLabel>

            {/* <FormControlLabel control={<Checkbox
              size="small"
              defaultChecked
              // checked={releseDatesChecked}
              onChange={releaseDateHandler}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label="Search all releases?" />
            {releseDatesChecked && <ReleaseDates AvailableReleaseCheckBox={AvailableReleaseCheckBox} />} */}
          </FormGroup>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3} sx={{ mb: 4, mt: 3 }} >
              <DesktopDatePicker
                label="From"
                inputFormat="MM/DD/YYYY"
                value={date1}
                onChange={dateFromChangeHandler}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label="To"
                inputFormat="MM/DD/YYYY"
                value={date2}
                onChange={dateToHandler}
                renderInput={(params) => <TextField {...params} />}
              />

            </Stack>
          </LocalizationProvider>

          {/* //////////////////////////////////////////////////// Chips //////////////////////////////////////////// */}
          <hr />
          <FormGroup>
            <FormLabel sx={{ mt: 1 }} id="demo-radio-buttons-group-label">Genres </FormLabel>
          </FormGroup>
          {<Chips chipHandler={chipHandler} />}

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
              defaultValue={[4, 6]}
              min={0}
              max={10}
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
              defaultValue={50} aria-label="Default" valueLabelDisplay="auto"   min={0} max={500} />
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
              defaultValue={[120, 180 ]}
              min={0}
              max={360}
            />
          </Box>
        </FormControl>}
      </FormControl>
    </div>
  );
}









