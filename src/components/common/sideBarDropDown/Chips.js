import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function Chips() {
  let theme = useTheme()

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Action' },
    { key: 1, label: 'Adventure' },
    { key: 2, label: 'Comedy' },
    { key: 3, label: 'Animation' },
    { key: 4, label: 'Crime' },
    { key: 5, label: 'Documentary' },
    { key: 6, label: 'Family' },
    { key: 7, label: 'Fantasy' },
    { key: 8, label: 'History' },
    { key: 9, label: 'Horror' },
    { key: 10, label: 'Music' },
    { key: 11, label: 'Mystery' },
    { key: 12, label: 'Romance' },
    { key: 13, label: 'Science Fiction' },
    { key: 14, label: 'TV Movie' },
    { key: 15, label: 'Thriller' },
    { key: 16, label: 'War' },
    { key: 17, label: 'Western' },
    { key: 18, label: 'TV Movie' },
  ]);

  const boxSX = {
    "&:hover": {
      border: "1px solid #01B4E4",
    },
  };

  const [availMultiCheckBox, setAvailMultiCheckBox] = React.useState([]);

  function chipHandler(e) {
    let value = e.target.closest(".test").getAttribute("value");

    var index = availMultiCheckBox.indexOf(value);

    if (index != -1) {
      let newArray = availMultiCheckBox.filter((curr, i) => {
        return curr != value
      });
      availMultiCheckBox.splice(index, 1)
      setAvailMultiCheckBox([...newArray]);
    } else {
      setAvailMultiCheckBox([...availMultiCheckBox, value])
    }
  }

  // console.log(availMultiCheckBox)

  return (
    <Box

      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        mb: 2,
      }}
      component="ul"
    >

      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip className='test' sx={boxSX} id={data.key} variant="outlined" label={data.label} value={data.label} onClick={chipHandler} />
          </ListItem>
        );
      })}
    </Box>
  );
}
