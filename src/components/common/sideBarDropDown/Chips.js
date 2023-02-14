import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function Chips(props) {
  let theme = useTheme()

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Action', value: 28 },
    { key: 1, label: 'Adventure', value: 12 },
    { key: 2, label: 'Comedy', value:16 },
    { key: 3, label: 'Animation', value:35 },
    { key: 4, label: 'Crime', value:80 },
    { key: 5, label: 'Documentary', value:99 },
    { key: 6, label: 'Darama', value:18 },
    { key: 7, label: 'Family', value:10751 },
    { key: 8, label: 'Fantasy', value:14 },
    { key: 9, label: 'History', value:36 },
    { key: 10, label: 'Horror', value:27 },
    { key: 11, label: 'Music', value:10402 },
    { key: 12, label: 'Mystery', value:9648 },
    { key: 13, label: 'Romance', value:10749 },
    { key: 14, label: 'Science Fiction', value:878 },
    { key: 15, label: 'TV Movie', value:10770 },
    { key: 16, label: 'Thriller', value: 53},
    { key: 17, label: 'War', value: 10752},
    { key: 18, label: 'Western', value:37 },
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
            <Chip className='test' sx={boxSX} id={data.key} variant="outlined" label={data.label} value={data.value} onClick={chipHandler} />
          </ListItem>
        );
      })}
    </Box>
  );
}
