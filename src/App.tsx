import "./App.css";
import "./responsive.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Box, ThemeProvider } from "@mui/material";
import PageHome from "./components/PageHome";
import { useState } from "react";
import ServicePage from "./components/ServicePage";
import AboutMePage from "./components/AboutMePage";
import ContactPage from "./components/ContactPage";
import { darkTheme, lightTheme } from "./themes";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  // const theme = createTheme();
  const [themeSwitch, setThemeSwitch] = useState(false);
  const theme = themeSwitch ? lightTheme : darkTheme;
  const switchTheme = () => setThemeSwitch(!themeSwitch);
  const boxStyle = {
    height: "100vh",
    background: "#716b6b",
    overflow: "scroll",
  };
  return (
    <BrowserRouter>
      <Box sx={boxStyle}>
        <ThemeProvider theme={theme}>
          <Header showHeader={showHeader} switchTheme={switchTheme} />
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
              element={<AboutMePage showHeader={() => setShowHeader(true)} />}
            />
            <Route
              path={"/services"}
              element={<ServicePage showHeader={() => setShowHeader(true)} />}
            />
            <Route
              path={"/contact"}
              element={<ContactPage showHeader={() => setShowHeader(true)} />}
            />
          </Routes>
        </ThemeProvider>
      </Box>
    </BrowserRouter>
  );
}

export default App;
