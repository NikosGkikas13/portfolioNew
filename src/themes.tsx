import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#fff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#000",
    },
  },
});

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export default themes;