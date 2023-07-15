import React from "react";
import { pdf } from '@react-pdf/renderer';
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import MyDocument from "./MyDocument";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .print-page": {

        },
        "@media print": {
            "& .print-item": {
                display: "block",
            },
        },
    },
}));


const PrintPage = ({ item, iframeRef }) => {
    const name = item.name;
    const position = item.position;
    const message = item.message;
    const image = item.image;
    const handlePrint = async () => {
        const blob = await pdf(<MyDocument name={name} position={position} message={message} image={image} />).toBlob();
        const blobURL = URL.createObjectURL(blob);

        iframeRef.current.src = blobURL;
        iframeRef.current.onload = function () {
            setTimeout(function () {
                iframeRef.current.focus();
                iframeRef.current.contentWindow.print();
            }, 1);
        };
    };
    return (
        <>
            <Button size="small"
                onClick={handlePrint}>
                <PrintRoundedIcon sx={{ mr: 1 }} /> Print
            </Button>
        </>
    )
}


export default PrintPage;