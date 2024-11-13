import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";
import PageHome from "./components/PageHome";
import { useState } from "react";
import ServicePage from "./components/ServicePage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  return (
    <BrowserRouter>
      <Box sx={{ width: "1280px", height: "800px", background: "#716b6b" }}>
        <Header showHeader={showHeader} />
        <Routes>
          <Route
            path={"/home"}
            element={<PageHome hideHeader={() => setShowHeader(false)} />}
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
      </Box>
    </BrowserRouter>
  );
}

export default App;
