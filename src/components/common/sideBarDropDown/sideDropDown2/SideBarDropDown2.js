import * as React from 'react';
import { Box, Stack, CardMedia, Card } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { discoverActionCreater } from '../../../../Store/reducers/discoverReducer';
import { useSelector, useDispatch } from 'react-redux';
import { Countries_url } from "../../../../Services/url";
import { axiosService } from "../../../../Services/axios.service";


export default function MultipleSelectChip() {
    const dispatch = useDispatch();
    const [state, setState] = React.useState('');
    const [countries, setCountries] = React.useState([]);

    React.useEffect(() => {
        axiosService({
            method: "GET",
            url: `${Countries_url}`,
        }).then((res) => {
            setCountries(res.data)
        })
    }, [])

    console.log(countries);

    const handleChange = (event) => {
        // dispatch(discoverActionCreater.sortHandler(event.target.value));
        setState(event.target.value);
    };


    const platformArray = ["https://www.themoviedb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
        "https://www.themoviedb.org/t/p/original/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        "https://www.themoviedb.org/t/p/original/ajbCmwvZ8HiePHZaOVEgm9MzyuA.jpg",
        "https://www.themoviedb.org/t/p/original/uW4dPCcbXaaFTyfL5HwhuDt5akK.jpg",
        "https://www.themoviedb.org/t/p/original/iJGVfWTDddgipZ7mJCCEYzmRYrP.jpg",
        "https://www.themoviedb.org/t/p/original/bVR4Z1LCHY7gidXAJF5pMa4QrDS.jpg",
        "https://www.themoviedb.org/t/p/original/liEIj6CkvojVDiMWeexGvflSPZT.jpg",
        "https://www.themoviedb.org/t/p/original/59azlQKUgFdYq6QI5QEAxIeecyL.jpg",
        "https://www.themoviedb.org/t/p/original/4FqTBYsUSZgS9z9UGKgxSDBbtc8.jpg"
    ]
    const styles = {
        platformContainer: {
            marginTop: "15px",
            display: "flex",
            flexWrap: "wrap",
            gap: 15,
            justifyContent: "center"
        },
        platform: {
            borderradius: "8px",
            cursor: "pointer"

        }
    }

    return (
        <Box sx={{ minWidth: 120, p: "20px" }}>
            <p>sort</p>
            <FormControl sx={{ mt: 1.5 }} fullWidth>
                <InputLabel size="small" sx={{ mt: -0.5, }} id="demo-simple-select-label">sort</InputLabel>

                <Select style={{ backgroundColor: "lightGrey", height: "35px" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label="sort"
                    onChange={handleChange}
                    MenuProps={{
                        PaperProps: {
                          sx: {
                              maxHeight: "200px",
                              minWidth:"10px",
                              width:"20px",                            
                            '& .MuiMenuItem-root': {
                              padding:1,
                            },
                          },
                        },
                      }}
                >
                     {
                        countries?.map((curr)=>{
                           return  <MenuItem key={curr.iso_3166_1} value={curr.iso_3166_1}> {curr.english_name}</MenuItem>

                        })
                    } 
            


                </Select>
            </FormControl>


            <div style={styles.platformContainer}>
                {platformArray.map((curr, i) => {
                    return <Card
                    key={`${i}`}
                        sx={styles.platform}>
                        <CardMedia

                            sx={{ height: 50, width: 50, }}
                            image={curr}
                            title="green iguana"
                        />
                    </Card>
                })}

            </div>

        </Box>
    );
}






