import { createTheme } from "@mui/material/styles";

const generateTheme = () =>
    createTheme({
        palette: {
            primary: {
                main: "#fca000",
            },
            secondary: {
                main: "#240046",
            },
            ternary: {
                main: "#0077b6",
            },
            text: {
                light: "#fff",
                gray: "#231F20",
            },
        },
        spacing: [
            0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
            95, 100, 120, 150, 170, 200, 220, 250, 300,
        ],
        shape: {
            borderRadius: "0",
            borderRadius2: "5px",
            borderRadius3: "8px",
            borderRadius4: "10px",
            borderRadius5: "15px",
            borderRadius6: "20px",
            borderRadius7: "30px",
            borderRadius8: "50%",
        },
        shadows: {
            0: "0 10px 50px rgb(166 209 237 / 25%)",
            1: "0 60px 45px 0 rgba(40,54,73,.1)",
            2: "0 10px 50px #00b4d84f",
            24: "none",
        },
        transitions: {
            easing: {
                easeOut: "all 0.3s ease-out",
                easeOut2: "all .5s ease-out",
                easeOut3: "all .7s ease-out",
                easeOut4: "all 1s ease-out",
                easeOut5: "all 1.2s ease-out",
                easeOut6: "all 1.5s ease-out",
                easeOut7: "all 2s ease-out",
            },
        },
        typography: {
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightSemiBold: 600,
            fontWeightBold: 700,
            fontWeightExtraBold: 800,
            fontWeightBlack: 900,
            h1: "32px",
            h2: "24px",
            h3: "18px",
            h4: "16px",
            h5: "14px",
            h6: "12px",
            customFont: "22px",
            customFont2: "42px",
            customFont3: "52px",
            customFont4: "72px",
            customFont5: "92px",
        },
    });

export default generateTheme;