// Colors
// https://mui.com/material-ui/customization/dark-mode/

// CSS comands
// https://mui.com/system/properties/#properties-reference-table

import { createTheme } from "@mui/material";

let theme = createTheme({
    palette: {
        mode: 'dark',
        primaryDark: {
            main: "#FFFFFF"
        },
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: "#d9d9d9",
        },
        text: {
            main: "#FFFFFF",
            secondary: "rgba(255, 255, 255, 0.7)",
            primaryDark: "#121212"
        },
        background: {
            default: "rgb(34, 34, 34)",
            paper: "divider",
        },
    },
    typography:{
        fontSize: 20,
    }
})

export default theme;

