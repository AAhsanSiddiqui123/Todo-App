import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


export default function BasicMenu(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [heading, setHeading] = React.useState("");
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setHeading(event.nativeEvent.target.outerText);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    let selectedOption = e.nativeEvent.target.outerText;
    if (heading === "MOVIES") {
      if (selectedOption === "popular") {

        localStorage.setItem("activePage", "popularMovie");
        navigate("/movie")

      } else if (selectedOption === "NowPlaying") {
        localStorage.setItem("activePage", "nowPlayingMovie");
        navigate("/movie/nowplaying")

      } else if (selectedOption === "UpComming") {
        localStorage.setItem("activePage", "upCommingMovie");
        navigate("/movie/upcomming")

      } else if (selectedOption === "TopRated") {
        localStorage.setItem("activePage", "topRatedMovie");
        navigate("/movie/toprated")
      }
    }
    if (heading === "TV SHOWS") {
      if (selectedOption === "Popular") {
        localStorage.setItem("activePage", "populartv");
        navigate("/tv/popular")
      }
    }
    if (heading === "PEOPLE") {
      if (selectedOption === "people") {
        localStorage.setItem("activePage", "people");
        navigate("/people")
      }
    }

    setAnchorEl(null);
  };


  return (
    <div >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
      >
        {props.values[0]}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          "& .MuiPaper-root": {
            padding: "0px"
          }
        }
        }>
        {props.values.map((curr, i) => {
          if (props.values[i + 1] === undefined) {
            return
          }
          return <MenuItem key={`${curr}-${i}`} onClick={handleClose}>{props.values[i + 1]}</MenuItem>
        })}
      </Menu>
    </div>
  );
}