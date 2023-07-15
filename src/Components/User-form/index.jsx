import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Grid, Typography, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import axios from 'axios';
import { userListSchema } from "./../../Utils/Validation";
import { Formik } from 'formik';
import toast from "./../../Utils/Notification";
import { ToastContainer } from 'react-toastify';
import ImageInput from '../ImageInput';
import { storage } from "./../../Utils/Firebase";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(20, 0, 0),
        "& .form-holder": {
            maxWidth: "600px",
            background: "#fff",
            boxShadow: theme.shadows[1],
            "& .MuiButtonBase-root": {
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translate(-50%, 17px)",
                boxShadow: theme.shadows[1],
                borderRadius: "30px",
                padding: theme.spacing(2, 4),
                backgroundColor: "#7b2cbf",
            },
            "& .MuiGrid-root": {
                "& .MuiGrid-item": {
                    width: "100%",
                    "& .MuiFormControl-root": {
                        "& .MuiInputBase-root": {
                            borderRadius: "10px",
                        },
                        "& .MuiInputBase-root, .MuiFormLabel-root": {
                            fontFamily: "unset",
                        },
                    },
                },
            },
        },
    },
}));

const UserForm = () => {
    const [submittingForm, setSubmittingForm] = useState(false);
    const imageRef = useRef(null);
    const classes = useStyles();

    let url = "https://user-list-4de6d-default-rtdb.firebaseio.com/userList.json";

    const uploadFile = async (file) => {
        const storageRef = ref(storage, 'images/' + file.name);
        const snapshot = await uploadBytes(storageRef, file);
        const fileUrl = await getDownloadURL(snapshot.ref);
        return fileUrl;
    }

    const handleSubmit = async (values, { resetForm }) => {
        setSubmittingForm(true);
        const imageUrl = await uploadFile(values.image);
        values.image = imageUrl;
        axios.post(url, values, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then(
            (res) => {
                setSubmittingForm(false);
                if (res.status === 200) {
                    resetForm({
                        name: '',
                        position: '',
                        message: '',
                        image: '',
                    });
                    toast.showSuccess("User Created Successfully");
                    console.log(imageRef)
                    imageRef.current.value = '';
                }
                else {
                    toast.showError('Sent Failed');
                    setSubmittingForm(false);
                }
            },
        );
    };

    return (
        <section className={classes.root}>
            <Container>
                <Typography component="div" className="form-holder" margin="0 auto" p={5} position="relative"
                    sx={{ borderRadius: 3 }}>
                    <Formik
                        initialValues={{ name: '', position: '', message: '', image: '' }}
                        validationSchema={userListSchema}
                        onSubmit={handleSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            setFieldValue
                        }) => (
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                                onSubmit={handleSubmit}
                                p={0}
                            >
                                <Grid container spacing={5} mb={3}>
                                    <Grid item sm={12} md={12} lg={12}>
                                        <TextField
                                            label="Name"
                                            placeholder="Enter your name"
                                            name="name"
                                            type='text'
                                            multiline
                                            fullWidth
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            error={errors.name && touched.name}
                                        />
                                        {errors.name && touched.name ? (
                                            <Typography sx={{
                                                color: "red",
                                                mt: 1
                                            }} className="error-message">{errors.name}</Typography>
                                        ) : null}
                                    </Grid>
                                    <Grid item sm={12} md={12} lg={12}>
                                        <TextField
                                            label="Position"
                                            placeholder="Enter your position"
                                            name='position'
                                            type='text'
                                            multiline
                                            fullWidth
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.position}
                                            error={errors.position && touched.position}
                                        />
                                        {errors.position && touched.position ? (
                                            <Typography sx={{
                                                color: "red",
                                                mt: 1
                                            }} className="error-message">{errors.position}</Typography>
                                        ) : null}
                                    </Grid>
                                    <Grid item sm={12} md={12} lg={12}>
                                        <TextField
                                            type='text'
                                            name='message'
                                            label="Message"
                                            placeholder="Enter message"
                                            multiline
                                            fullWidth
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.message}
                                            error={errors.message && touched.message}
                                        />
                                        {errors.message && touched.message ? (
                                            <Typography sx={{
                                                color: "red",
                                                mt: 1
                                            }} className="error-message">{errors.message}</Typography>
                                        ) : null}
                                    </Grid>
                                    <Grid item sm={12} md={12} lg={12}>
                                        <TextField
                                            id="file"
                                            variant="outlined"
                                            margin="dense"
                                            type="file"
                                            name="image"
                                            onChange={event => {
                                                setFieldValue("image", event.currentTarget.files[0]);
                                            }}
                                            onBlur={handleBlur}
                                            error={errors.image && touched.image}
                                            inputProps={{
                                                accept: ".jpg,.png,.jpeg",
                                                ref: imageRef
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
                                    {/* <ImageInput /> */}
                                </Grid>
                                <Button variant='contained' type='submit' onSubmit={handleSubmit} disabled={submittingForm}>
                                    <AddRoundedIcon />Create New
                                </Button>
                            </Box>
                        )}
                    </Formik>
                </Typography>
            </Container>
            <ToastContainer />
        </section >
    );
}

export default UserForm;