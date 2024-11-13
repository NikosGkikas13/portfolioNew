import { Box, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

const AboutMeContainer = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const theme = useTheme();
  const aboutMeStyle = {
    border: `1px solid ${theme.palette.primary.main}`,
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
  return (
    <Box sx={aboutMeStyle}>
      <Box sx={aboutMeTitleStyle}>{title}</Box>
      {children}
    </Box>
  );
};

export default AboutMeContainer;
