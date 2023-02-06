import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SideBarDropDown from "../common/sideBarDropDown/SideBarDropDown0";
import SideVarDropDown1 from "../common/sideBarDropDown/SideVarDropDown1";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const SideBar = () => {
    const [drop1, setDrop1] = React.useState(false);
    const [drop2, setDrop2] = React.useState(false);

  return (
    <Grid item lg={3.2} md={3.2} sm={12} xs={12}>
    {/* <div style={{ backgroundColor: '' }} > */}

    <Paper style={{ border: "solid 1px lightgrey", borderRadius: "6px", }}>
        <div style={{ height: "60px", cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => { return setDrop1(!drop1) }}>
            <p>Sort</p>
        </div>
        {drop1 && <SideBarDropDown />}
    </Paper>

    <Paper style={{marginTop: "14px" , border: "solid 1px lightgrey", borderRadius: "6px" }}>
        <div style={{ height: "60px", cursor: "pointer", display: "flex", alignItems: "center",justifyContent: "space-between", paddingRight:"8px", paddingLeft:"8px" }} onClick={() => { return setDrop2(!drop2) }}>
            <p>Filter</p> 
            <ChevronRightIcon />
        </div>
        {drop2 && <SideVarDropDown1 />}
    </Paper>

    {/* <SideBarDropDown /> */}
    {/* </div> */}
</Grid>
  )
}

export default SideBar