import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import AboutMeContainer from "./AboutMeContainer";
import HistoryTimelineItem from "./HistoryTimelineItem";
import { historyData } from "../constants";

const HistoryTimeline = () => {
  return (
    <AboutMeContainer title="EXPERIENCE">
      <Timeline>
        {historyData.map((item, index, arr) => (
          <HistoryTimelineItem
            companyTitle={item.companyTitle}
            years={item.years}
            jobTitle={item.jobTitle}
            jobDescription={item.jobDescription}
            separator={arr.length - 1 === index}
          />
        ))}
      </Timeline>
    </AboutMeContainer>
  );
};

export default HistoryTimeline;
