import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import astronaut from "../assets/astronaut.jpg";
import SpaceCard from "./SpaceCard";
import { PAGES, welcomeText } from "../constants";
import { Link } from "react-router-dom";

const PageHome = ({ hideHeader }: { hideHeader: () => void }) => {
  hideHeader();
  const theme = useTheme();
  return (
    <Box sx={{ height: "100%" }}>
      <Box
        sx={{
          height: "50%",
          background: `url(${astronaut})`,
          backgroundPosition: "100% 25%",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
            width: "50%",
          }}
        >
          <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
            {welcomeText.title}
          </Typography>
          <Typography variant="h4" sx={{ color: theme.palette.secondary.main }}>
            {welcomeText.subTitle}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "50%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: theme.palette.background.default,
        }}
      >
        {PAGES.filter((page) => page.name !== "Home").map((filteredPage) => (
          <Link to={filteredPage.link} key={filteredPage.name}>
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
