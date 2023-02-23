import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


export default function BasicMenu(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (e) => {
    let selectedOption = e.nativeEvent.target.outerText;
    console.log(selectedOption)

    if(selectedOption === "Popular"){
      localStorage.setItem("activePage", "popularMovie");
      navigate("/movie")     

    }else if(selectedOption === "NowPlaying"){  
      localStorage.setItem("activePage", "nowPlayingMovie");
      navigate("/movie/nowplaying")

    }else if(selectedOption === "UpComming"){  
      localStorage.setItem("activePage", "upCommingMovie");
      navigate("/movie/upcomming")
      
    }else if(selectedOption === "TopRated"){  
      localStorage.setItem("activePage", "topRatedMovie");
      navigate("/movie/toprated")
    }

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