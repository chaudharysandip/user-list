import { Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ImageInput = ({ handleChange, handleBlur, errors, touched }) => {

    return (
        <Grid item sm={12} md={12} lg={12}>
            <TextField
                id="file"
                variant="outlined"
                margin="dense"
                type="file"
                name="image"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image && touched.image}
                inputProps={{
                    accept: ".jpg,.png,.jpeg"
                }}
                sx={{
                    '& legend': { display: 'none' },
                    '& fieldset': { top: 0 },
                }}
                fullWidth
            />
            {errors.image && touched.image ? (
                <Typography sx={{
                    color: "red",
                    mt: 1
                }} className="error-message">{errors.image}</Typography>
            ) : null}
        </Grid>
    )
}


export default ImageInput;