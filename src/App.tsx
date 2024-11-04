import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./components/PageHome.tsx";
import Header from "./components/Header.tsx";
import { Box, Container, ThemeProvider } from "@mui/material";
import ServicePage from "./components/ServicePage.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Contact from "./components/Contact.tsx";
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

function App() {
  return (
    <BrowserRouter>
      <div className="center"></div>
      <Container sx={containerStyle} maxWidth="xl" style={{ zIndex: 4 }}>
        <ThemeProvider theme={lightTheme}>
          <Header />
          <Box id="page_container" sx={boxStyle} style={{ zIndex: 4 }}>
            <Routes>
              <Route path={"/"} element={<PageHome />} />
              <Route path={"/about"} element={<AboutMe />} />
              <Route path={"/services"} element={<ServicePage />} />
              <Route path={"/Portfolio"} element={<h1>portfolio</h1>} />
              <Route path={"/contact"} element={<Contact />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
