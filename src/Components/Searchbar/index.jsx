import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiInputBase-root": {
            borderRadius: "8px",
        },
    },
}));

const SearchBar = ({ userData }) => {
    const classes = useStyles();

    return (
        userData && userData.length ? (
            <section className={classes.root}>
                <Stack spacing={2} sx={{ width: 350 }}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={userData.map((option) => option.name)}
                        renderInput={(params, i) => (
                            <TextField
                                {...params}
                                label="Search input"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />
                </Stack>
            </section>
        ) : null
    );
}

export default SearchBar;