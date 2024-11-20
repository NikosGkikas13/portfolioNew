import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import PageHome from "./components/PageHome";
import { useState } from "react";
import ServicePage from "./components/ServicePage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { darkTheme, lightTheme } from "./themes";
import { light } from "@mui/material/styles/createPalette";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  // const theme = createTheme();
  const [themeSwitch, setThemeSwitch] = useState(false);
  const theme = themeSwitch ? lightTheme : darkTheme;
  const switchTheme = () => setThemeSwitch(!themeSwitch);
  return (
    <BrowserRouter>
      <Box sx={{ width: "1280px", height: "800px", background: "#716b6b" }}>
        <ThemeProvider theme={theme}>
          <Header showHeader={showHeader} />
          <Routes>
            <Route
              path={"/home"}
              element={
                <PageHome
                  hideHeader={() => setShowHeader(false)}
                  switchTheme={switchTheme}
                />
              }
            />
            <Route
              path={"/about"}
              element={<AboutMe showHeader={() => setShowHeader(true)} />}
            />
            <Route
              path={"/services"}
              element={<ServicePage showHeader={() => setShowHeader(true)} />}
            />
            <Route
              path={"/contact"}
              element={<Contact showHeader={() => setShowHeader(true)} />}
            />
          </Routes>
        </ThemeProvider>
      </Box>
    </BrowserRouter>
  );
}

export default App;
