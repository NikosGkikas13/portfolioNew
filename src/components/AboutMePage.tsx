import { Box, useTheme } from "@mui/material";
import { useEffect } from "react";

import ProgrammingSkills from "./ProgrammingSkills";
import PersonalInfo from "./PersonalInfo";
import HistoryTimeline from "./HistoryTimeline";
import services from "../assets/services.jpg";
const AboutMe = ({ showHeader }: { showHeader: () => void }) => {
  useEffect(() => showHeader());
  return (
    <Box
      id="about_me_container"
      sx={{
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        padding: "20px 0px",
        overflow: "auto",
        background: `url(${services})`,
        backgroundSize: "cover",
        height: "90%",
      }}
    >
      <PersonalInfo />
      <ProgrammingSkills />
      <HistoryTimeline />
    </Box>
  );
};

export default AboutMe;
