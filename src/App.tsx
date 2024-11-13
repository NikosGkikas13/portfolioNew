import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";
import PageHome from "./components/PageHome";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ width: "1280px", height: "800px", background: "#716b6b" }}>
        <Header />
        <Routes>
          <Route path={"/"} element={<PageHome />} />
          <Route path={"/about"} element={<h1>about</h1>} />
          <Route path={"/services"} element={<h1>services</h1>} />
          <Route path={"/Portfolio"} element={<h1>portfolio</h1>} />
          <Route path={"/contact"} element={<h1>contact</h1>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
