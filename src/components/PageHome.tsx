import { Box } from "@mui/material";
import React from "react";
import astronaut from "../assets/astronaut.jpg";
import SpaceCard from "./SpaceCard";

const PageHome = ({ hideHeader }: { hideHeader: () => void }) => {
  hideHeader();
  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ height: "50%", background: `url(${astronaut})` }}>top</Box>
      <Box
        sx={{
          height: "50%",
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
      </Box>
    </Box>
  );
};

export default PageHome;
