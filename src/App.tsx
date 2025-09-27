import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Box, ThemeProvider } from "@mui/material";
import PageHome from "./components/PageHome";
import { useEffect, useState } from "react";
import ServicePage from "./components/ServicePage";
import AboutMePage from "./components/AboutMePage";
import ContactPage from "./components/ContactPage";
import { darkTheme, lightTheme } from "./themes";
import { isMobile } from "./constants";
import emailjs from "@emailjs/browser";
import "./App.css";
import "./Animation.css";
import "./responsive.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [themeSwitch, setThemeSwitch] = useState(false);
  const theme = themeSwitch ? lightTheme : darkTheme;
  const switchTheme = () => setThemeSwitch(!themeSwitch);
  const boxStyle = {
    height: !isMobile ? "100vh" : undefined,
    background: "#716b6b",
    overflow: "scroll",
  };
  useEffect(() => emailjs.init("-fQBJ6O_sM-RKyMEG"), []);

  return (
    <BrowserRouter>
      <Box sx={boxStyle}>
        <ThemeProvider theme={theme}>
          <Header showHeader={showHeader} switchTheme={switchTheme} />
          <ScrollToTop />
          <Routes>
            <Route
              path={"/"}
              element={
                <PageHome
                  hideHeader={() => setShowHeader(true)}
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
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </Box>
    </BrowserRouter>
  );
}

export default App;
