import { Box } from "@mui/material";
import React from "react";
import astronaut from "../assets/astronaut.jpg";
import SpaceCard from "./SpaceCard";
import { PAGES } from "../constants";
import { Link } from "react-router-dom";

const PageHome = ({ hideHeader }: { hideHeader: () => void }) => {
  hideHeader();
  console.log(PAGES);
  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ height: "50%", background: `url(${astronaut})` }}>top</Box>
      <Box
        sx={{
          height: "50%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {PAGES.filter((page) => page.name !== "Home").map((filteredPage) => (
          <Link to={filteredPage.link}>
            {" "}
            <SpaceCard
              name={filteredPage.name}
              description={filteredPage.description}
              icon={filteredPage.icon}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default PageHome;
