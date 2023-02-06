import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';


export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();


  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    console.log(e.nativeEvent.target.outerText)
    dispatch({ type: "user_saga", action: "payload" })
    setAnchorEl(null);
  };



  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: "white"}}
      >
        {props.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  onClick={handleClose}>{props.val1}</MenuItem>
        <MenuItem  onClick={handleClose}>{props.val2}</MenuItem>
        <MenuItem  onClick={handleClose}>{props.val3}</MenuItem>
        <MenuItem  onClick={handleClose}>{props.val4}</MenuItem>
      </Menu>
    </div>
  );
}