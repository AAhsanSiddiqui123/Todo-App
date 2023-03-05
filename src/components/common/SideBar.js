import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SideBarDropDown0 from "./sideBarDropDown/sideDropDown0/SideBarDropDown0";
import SideVarDropDown1 from "./sideBarDropDown/sideDropDown1/SideVarDropDown1";
import SideBarDropDown2 from "./sideBarDropDown/sideDropDown2/SideBarDropDown2";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { movieActionCreater } from "../../Store/reducers/movieReducer";



import { useSelector, useDispatch } from 'react-redux';
import { height } from '@mui/system';

let queryString;
const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [drop0, setDrop0] = React.useState(false);
  const [drop1, setDrop1] = React.useState(false);
  const [drop2, setDrop2] = React.useState(false);
  const [activeBtn, setActiveBtn] = React.useState(true);
  let queryObj = useSelector((state)=>state.discoverReducer.queryObj);


  function querySelector() {
    setActiveBtn(false)
  }
  
  function clickHandler() {  
    dispatch(movieActionCreater.loadMoreClickedHandler(false))
    dispatch(movieActionCreater.activePageNumHandler(1));
    localStorage.setItem("activePage", "filterPage");
    dispatch({ type: "discoverMovie_Saga", action:{queryObj: queryObj, page:1 } })
    navigate("/filterpage")
    
  }

  const style = {
    divStyle: {
      height: "45px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingRight: "8px",
      paddingLeft: "8px"
    },
    paper: {
      marginTop: "14px",
      border: "solid 1px lightgrey",
      borderRadius: "6px",
      boxShadow: "1px 3px 18px #dad6d6"
    },
    sortDropDonw:{
      marginTop: "14px",
      border: "solid 1px lightgrey",
      borderRadius: "6px",
      boxShadow: "1px 3px 18px #dad6d6",
      // height:"100px"
    }
  }



  return (
    <Grid item xs={12} sm={12} md={3} lg={2.5}>

      <Paper sx={style.sortDropDonw}>
        <div style={style.divStyle} onClick={() => { return setDrop0(!drop0) }}>
          <p>Sort</p>
          <ChevronRightIcon />
        </div>
        {drop0 && <SideBarDropDown0 querySelector={querySelector} />}
      </Paper>

      <Paper sx={style.paper}>
        <div style={style.divStyle} onClick={() => { return setDrop1(!drop1) }}>
          <p>Filter</p>
          <ChevronRightIcon />
        </div>
        {drop1 && <SideVarDropDown1 querySelector={querySelector} />}
      </Paper>

      <Paper sx={style.paper}>
        <div style={style.divStyle} onClick={() => { return setDrop2(!drop2) }}>
          <Typography gutterBottom component="p" sx={{ fontSize: 15, whiteSpace: "nowrap"}} >Where To Watch</Typography>
          <ChevronRightIcon />
        </div>
        {drop2 && <SideBarDropDown2 querySelector={querySelector}/>}
      </Paper>

      <Button variant="contained" onClick={clickHandler} disabled = {activeBtn} sx={{ width: "100%", borderRadius: "16px", mt: 3 }}>Search</Button>

    </Grid>
  )
}

export default SideBar