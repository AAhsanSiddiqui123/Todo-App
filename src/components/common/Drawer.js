import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from "../../components/common/menu/DrawerMenu/DrawerMenu"



export default function SideDrawer(props) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, mb:10 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
    </Box>
  );

  return (
    <div>
      <React.Fragment >
        <p onClick={toggleDrawer("left", true)}>{<MenuIcon />}</p>
        <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)} >
          {list("left")}
          <DrawerMenu
            values={["Movies", "popular","NowPlaying","UpComming", "TopRated"  ]}

          />
          <DrawerMenu
          values={["Tv Shows", "Popular"]}
          />
          <DrawerMenu
          values={["People", "people"  ]}
          />
        </Drawer >
      </React.Fragment>
    </div>
  );
}
