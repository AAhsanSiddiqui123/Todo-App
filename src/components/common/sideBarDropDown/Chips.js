import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';


const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function Chips() {
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
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;
        return (
          <ListItem key={data.key}>
            <Chip
              variant="outlined"
              icon={icon}
              label={data.label}
              
            />
          </ListItem>
        );
      })}
    </Box>
  );
}
