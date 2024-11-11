import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./components/PageHome.tsx";
import Header from "./components/Header.tsx";
import {
  Box,
  Container,
  CssBaseline,
  Theme,
  ThemeProvider,
} from "@mui/material";
import ServicePage from "./components/ServicePage.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Contact from "./components/Contact.tsx";

import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./themes.tsx";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "700px",
  gap: "20px",
};
const boxStyle = {
  background: "#ffffffe8",
  // width: "80%",
  width: "900px",
  height: "100%",
  display: "flex",
  // alignItems: window.location.href.includes("about") ? "start" : "center",
  justifyContent: "center",
  padding: "0px 20px",
  color: "#000",
};

const App = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {});

  const toggleTheme = () =>
    setTheme(theme === lightTheme ? darkTheme : lightTheme);

  //playground
  const clickHandler = () => {
    console.log(theme.palette.mode);
    toggleTheme();
  };
  //playground
  return (
    <BrowserRouter>
      <div className="center"></div>
      <Container sx={containerStyle} maxWidth="xl" style={{ zIndex: 4 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header toggleTheme={toggleTheme} />
          <Box
            id="page_container"
            sx={boxStyle}
            style={{ zIndex: 4, padding: "0" }}
          >
            <Routes>
              <Route path={"/"} element={<PageHome />} />
              <Route path={"/services"} element={<ServicePage />} />
              <Route path={"/about"} element={<AboutMe />} />
              <Route path={"/contact"} element={<Contact />} />
            </Routes>
            <button onClick={clickHandler}>click</button>
          </Box>
        </ThemeProvider>
      </Container>
    </BrowserRouter>
  );
};

export default App;
