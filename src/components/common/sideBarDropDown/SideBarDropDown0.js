import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";



export default function MultipleSelectChip() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{  width: "100%" }}>
        <hr />
        <div style={{ marginTop: "6px" }}>
          <div><p>Sort Results By</p></div>
          <MenuItem style={{ m: 1, width: "100%", backgroundColor: "white" }}>
            {
              <select name="cars" id="cars" style={{ width: "100%", height: "35px", borderRadius: "5px" }}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            }
          </MenuItem>
        </div>
      </FormControl>
    </div>
  );
}
