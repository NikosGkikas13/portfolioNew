import { Container, useTheme } from "@mui/material";
import React from "react";

import ProgrammingSkills from "./ProgrammingSkills";
import PersonalInfo from "./PersonalInfo";
import HistoryTimeline from "./HistoryTimeline";

const AboutMe = () => {
  const theme = useTheme();
  return (
    <Container
      id="about_me_container"
      sx={{
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        marginTop: "18px",
        padding: "20px 0px",
        overflow: "auto",
        background: theme.palette.background.default,
      }}
    >
      <PersonalInfo />
      <ProgrammingSkills />
      <HistoryTimeline />
    </Container>
  );
};

export default AboutMe;
