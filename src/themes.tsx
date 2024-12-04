import { createTheme } from "@mui/material/styles";
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#716e6f",
    },
    background: {
      default: "#fff",
      paper: "#ffffff7d",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#494849",
    },
    background: {
      default: "#000",
      paper: "#0000007c",
    },
  },
});
