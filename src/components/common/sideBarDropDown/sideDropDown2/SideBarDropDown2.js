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

export default function MultipleSelectChip(props) {
    const dispatch = useDispatch();
    const [regin, setRegin] = React.useState("PK");
    const [ott, setOtt] = React.useState([]);
    const [countries, setCountries] = React.useState([]);

    React.useEffect(() => {
        axiosService({
            method: "GET",
            url: `${Countries_url}`,
        }).then((res) => {
            setCountries(res.data)
        })
    }, [])

    React.useEffect(() => {
        axiosService({
            method: "GET",
            url: `https://api.themoviedb.org/3/watch/providers/movie`,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", watch_region: regin }
        }).then((res) => {
            setOtt(res.data.results)
        })
    }, [regin])


    const handleChange = (e) => {
        dispatch(discoverActionCreater.whereToWatchCountry(e.target.value));
        setRegin(e.target.value);
    };


    
    const [providers, setProviders] = React.useState([]);

    function ottProviderHandler(e) {
        var index = providers.indexOf(e.target.dataset.value);

        if (index != -1) {
            let newArray = providers.filter((curr, i) => {
                return curr != e.target.dataset.value
            });
            providers.splice(index, 1)
            setProviders([...newArray]);
        } else {
            setProviders([...providers, e.target.dataset.value])
        }
        
        
    }
    
    React.useEffect(()=>{
        dispatch(discoverActionCreater.whereToWatchOtt(providers));
    },[providers])









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
            <p>Countries</p>
            <FormControl sx={{ mt: 1.5 }} fullWidth>
                <InputLabel size="small" sx={{ mt: -0.5, }} id="demo-simple-select-label">Country</InputLabel>

                <Select style={{ backgroundColor: "lightGrey", height: "35px" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={regin}
                    label="country"
                    onChange={handleChange}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                maxHeight: "200px",
                                minWidth: "10px",
                                width: "20px",
                                '& .MuiMenuItem-root': {
                                    padding: 1,
                                },
                            },
                        },
                    }}
                >
                    {
                        countries?.map((curr) => {
                            return <MenuItem key={curr.iso_3166_1} value={curr.iso_3166_1}> {curr.english_name}</MenuItem>

                        })
                    }



                </Select>
            </FormControl>


            <div style={styles.platformContainer}>
                {ott?.map((curr, i) => {
                    return <div key={`${curr.provider_id}`} onClick={ottProviderHandler}  >
                        <Card                          
                            sx={styles.platform}>
                            <CardMedia
                            data-value={curr.provider_id}
                                sx={{ height: 50, width: 50, }}
                                image={`https://www.themoviedb.org/t/p/original/${curr.logo_path}`}
                                title={curr.provider_name}
                            />
                        </Card>
                    </div>
                })}

            </div>

        </Box>
    );
}






