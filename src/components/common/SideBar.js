import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SideBarDropDown from "../common/sideBarDropDown/SideBarDropDown0";
import SideVarDropDown1 from "../common/sideBarDropDown/SideVarDropDown1";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';

const SideBar = () => {
  const [drop1, setDrop1] = React.useState(false);
  const [drop2, setDrop2] = React.useState(false);
  const [drop3, setDrop3] = React.useState(false);

  function querySelector(active, queryQbj){
    console.log(queryQbj)
  }



  return (
    <Grid item lg={2.5} md={3} sm={12} xs={12}>

      <Paper style={{ border: "solid 1px lightgrey", borderRadius: "6px", boxShadow: "1px 3px 18px #dad6d6" }}>
        <div style={{ height: "45px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "8px", paddingLeft: "8px" }} onClick={() => { return setDrop1(!drop1) }}>
          <p>Sort</p>
          <ChevronRightIcon />
        </div>
        {drop1 && <SideBarDropDown />}
      </Paper>

      <Paper style={{ marginTop: "14px", border: "solid 1px lightgrey", borderRadius: "6px", boxShadow: "1px 3px 18px #dad6d6" }}>
        <div style={{ height: "45px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "8px", paddingLeft: "8px" }} onClick={() => { return setDrop2(!drop2) }}>
          <p>Filter</p>
          <ChevronRightIcon  />
        </div>
        {drop2 && <SideVarDropDown1 querySelector={querySelector} />}
      </Paper>

      <Paper style={{ marginTop: "14px", border: "solid 1px lightgrey", borderRadius: "6px", boxShadow: "1px 3px 18px #dad6d6" }}>
        <div style={{ height: "45px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "8px", paddingLeft: "8px" }} onClick={() => { return setDrop3(!drop3) }}>
          <p>Sort</p>
          <ChevronRightIcon />
        </div>
        {drop3 && <SideBarDropDown />}
      </Paper>

      <Button variant="contained" disabled sx={{width: "100%", borderRadius: "16px", mt: 3}}>Search</Button>

    </Grid>
  )
}

export default SideBar