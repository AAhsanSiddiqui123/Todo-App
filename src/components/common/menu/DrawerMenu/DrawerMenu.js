import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";


export default function DrawerMenu(props) {
    let close;
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [heading, setHeading] = React.useState("");


    function closefunction() {
        props.closeDrawer("left")
    }

    const handleClick = (e) => {
        setHeading(e.target.innerText);
        setOpen(!open);
    };


    function onclickhandler(e) {
        let selectedOption = e.target.innerText;
        if (heading === "Movies") {
            closefunction()
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
        if (heading === "Tv Shows") {
            closefunction()
            if (selectedOption === "Popular") {
                localStorage.setItem("activePage", "populartv");
                navigate("/tv/popular")
            }
        }
        if (heading === "People") {
            closefunction()
            if (selectedOption === "people") {
                localStorage.setItem("activePage", "people");
                navigate("/people")
            }
        }
        // setAnchorEl(null);
    }

    return (
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", ml: 5 }} component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={props.values[0]} />
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.values.map((curr, i) => {
                        if (props.values[i + 1] === undefined) {
                            return
                        }
                        return <ListItemButton key={`${curr}-${i}`} onClick={onclickhandler} sx={{ pl: 4 }}>
                            <ListItemText primary={props.values[i + 1]} />
                        </ListItemButton>
                    })}
                </List>
            </Collapse>
        </List>
    );
}
