import { Widgets } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const aboutMeStyle = {
  border: "1px solid red",
  maxWidth: "700px",
  padding: "20px",
  width: "100%",
};

const aboutMeTitleStyle = {
  position: "relative",
  top: "-38px",
  background: "antiquewhite",
  width: "fit-content",
  padding: "5px",
};

const AboutMeContainer = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Box sx={aboutMeStyle}>
      <Box sx={aboutMeTitleStyle}>{title}</Box>
      {children}
    </Box>
  );
};

export default AboutMeContainer;
