import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./components/PageHome.tsx";
import Header from "./components/Header.tsx";
import { Box, Container, CssBaseline } from "@mui/material";
import ServicePage from "./components/ServicePage.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Contact from "./components/Contact.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });
  const toggleTheme = () => {
    setMode(!mode);
  };
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "700px",
    gap: "20px",
  };
  const boxStyle = {
    background: theme.palette.background.default,
    // width: "80%",
    width: "900px",
    height: "100%",
    display: "flex",
    // alignItems: window.location.href.includes("about") ? "start" : "center",
    justifyContent: "center",
    padding: "0px 20px",
    color: "#000",
  };

  return (
    <BrowserRouter>
      <div className="center"></div>
      <Container sx={containerStyle} maxWidth="xl" style={{ zIndex: 4 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header toggle={toggleTheme} />

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
          </Box>
        </ThemeProvider>
      </Container>
    </BrowserRouter>
  );
};

export default App;
