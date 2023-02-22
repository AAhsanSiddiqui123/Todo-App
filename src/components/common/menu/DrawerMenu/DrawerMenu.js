import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

export default function DrawerMenu(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = (e) => {
        console.log(e.target.innerText);
        setOpen(!open);
    };

    function onclickhandler(e) {
        console.log(e.target.innerText);

    }

    return (
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", ml:5 }} component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={props.values[0]} />
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    {props.values.map((curr, i) => {
                        return <ListItemButton onClick={onclickhandler} sx={{ pl: 4 }}>
                            <ListItemText primary={props.values[i + 1]} />
                        </ListItemButton>
                    })}

                </List>
            </Collapse>
        </List>
    );
}
