import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./components/PageHome.tsx";
import Header from "./components/Header.tsx";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          width: "1400px",
          justifyContent: "space-between",
          height: "700px",
        }}
        maxWidth="xl"
      >
        <Header />
        <Box
          sx={{
            background: "#fff",
            width: "80%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Routes>
            <Route path={"/"} element={<PageHome />} />
            <Route path={"/about"} element={<h1>about</h1>} />
            <Route path={"/services"} element={<h1>services</h1>} />
            <Route path={"/Portfolio"} element={<h1>portfolio</h1>} />
            <Route path={"/contact"} element={<h1>contact</h1>} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
