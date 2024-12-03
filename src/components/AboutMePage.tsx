import { Box } from "@mui/material";
import { useEffect } from "react";

import ProgrammingSkills from "./ProgrammingSkills";
import PersonalInfo from "./PersonalInfo";
import HistoryTimeline from "./HistoryTimeline";
import services from "../assets/services.jpg";
const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
  padding: "60px 0px",
  overflow: "auto",
  background: `url(${services})`,
  backgroundSize: "cover",
  height: "90%",
};
const AboutMe = ({ showHeader }: { showHeader: () => void }) => {
  useEffect(() => showHeader());
  return (
    <Box id="about_me_container" sx={style}>
      <PersonalInfo />
      <ProgrammingSkills />
      <HistoryTimeline />
    </Box>
  );
};

export default AboutMe;
