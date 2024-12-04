import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

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
    background: theme.palette.mode === "light" ? "#fff" : "#000000c7",
    borderRadius: 3,
  };

  const aboutMeTitleStyle = {
    position: "relative",
    top: "-38px",
    background: "#ff9200",
    width: "fit-content",
    padding: "5px",
    color: theme.palette.primary.main,
  };
  return (
    <Box sx={aboutMeStyle}>
      <Box sx={aboutMeTitleStyle}>{title}</Box>
      {children}
    </Box>
  );
};

export default AboutMeContainer;
