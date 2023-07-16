import React, { useEffect, useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import { Container, Grid } from '@mui/material';
import Image from "./../../Assets/Images/user-1.jpg";
import { db } from './../../Utils/Firebase';
import { onValue, ref } from 'firebase/database';
import PrintPage from '../Print-page';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(20, 0),
        "& .user-list": {
            "& .name": {
                color: theme.palette.secondary.main,
                fontSize: theme.typography.h2,
                fontWeight: theme.typography.fontWeightBold,
            },
            "& .designation": {
                color: theme.palette.text.gray,
                fontSize: theme.typography.h3,
            },
            "& .text-holder": {
                "& .title": {
                    color: theme.palette.text.gray,
                    fontSize: theme.typography.h1,
                    fontWeight: theme.typography.fontWeightBold,
                },
            },
            "& .MuiGrid-root": {
                "& .MuiGrid-item": {
                    width: "100%",
                    "& .MuiCard-root": {
                        transition: theme.transitions.easing.easeOut,
                        "&:hover": {
                            transform: "translateY(-10px)",
                        },
                    },
                },
            },
        },
        "& .no-data": {
            color: theme.palette.secondary.main,
            fontSize: theme.typography.h2,
            fontWeight: theme.typography.fontWeightBold,
        },
    },
}));

const UserList = () => {
    const [userData, setUserData] = useState([]);
    const iframeRef = useRef();
    const classes = useStyles();

    useEffect(() => {
        const query = ref(db, "userList");
        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                Object.values(data).map((project) => {
                    setUserData((projects) => [...projects, project]);
                });
            }
        });
    }, []);

    return (
        userData && userData.length ? (
            <section className={classes.root}>
                <Container className="user-list">
                    <Typography
                        component="div"
                        className="text-holder"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        mb={10}>
                        <Typography variant='h1' className='title'>
                            User List
                        </Typography>
                        {/* <SearchBar userData={userData} /> */}
                    </Typography>

                    <Grid container spacing={5}>
                        {
                            userData?.map((item, i) => {
                                return (
                                    <Grid item sm={12} md={12} lg={4} key={i + "__"}>
                                        <Card
                                            sx={{
                                                borderRadius: 4,
                                                boxShadow: "0 60px 45px 0 rgba(40,54,73,.1)",
                                                height: "100%"
                                            }}>
                                            <CardMedia
                                                sx={{ height: 300, backgroundPosition: "top center" }}
                                                image={item.image ? item.image : Image}
                                                title="green iguana"
                                            />
                                            <CardContent id={`item-to-print${i + 1}`}>
                                                <Typography variant="h1" className="name" mb={1}>
                                                    {item.name}
                                                </Typography>
                                                <Typography gutterBottom variant="h2" className='designation'>
                                                    {item.position}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.message}
                                                </Typography>
                                            </CardContent>
                                            <CardActions
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    displayPrint: 'none !important',
                                                }}>
                                                <Typography component="div">
                                                    <PrintPage iframeRef={iframeRef} item={item} />
                                                </Typography>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <iframe ref={iframeRef} style={{ display: 'none' }} />
                </Container>
            </section >
        ) : null
    )
}

export default UserList;