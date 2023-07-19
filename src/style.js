import { createTheme } from "@mui/material";

let theme = createTheme({
    palette: {
        mode: 'dark',
        primaryDark: {
            main: "#FFFFF",
        },
        primary: {
            main: "#FFFFF"
        },
        secondary: {
            main: "#FFFFF",
        },
        text: {
            main: "#FFFFF",
        },
    },
    typography:{
        fontSize: 20,
    }
})

export default theme;

