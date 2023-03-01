import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { discoverActionCreater } from '../../../../Store/reducers/discoverReducer';
import { useSelector, useDispatch } from 'react-redux';


export default function MultipleSelectChip() {
  const dispatch = useDispatch();

  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    dispatch(discoverActionCreater.sortHandler(event.target.value));
    setState(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, p:"20px"}}>
      <p>Sort Result By</p>
      <FormControl sx={{mt:1.5}} fullWidth>
        <InputLabel size="small" sx={{mt:-0.5,}} id="demo-simple-select-label">Sort</InputLabel>

        <Select style={{backgroundColor:"lightGrey",  height:"35px"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="sort"
          onChange={handleChange}
        >
          <MenuItem value="Popularity.asc"> Popularity Descending </MenuItem>
          <MenuItem value="Popularity.desc">Popularity Aecending </MenuItem>
          <MenuItem value="release_date.desc">Releas Date Descending</MenuItem>
          <MenuItem value="release_date.asc">Releas Date Aecending </MenuItem>
          <MenuItem value="title.asc">Title (A-Z)</MenuItem>
          <MenuItem value="title.desc">Title (Z-A) </MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}






