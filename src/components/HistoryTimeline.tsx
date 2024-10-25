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

const historyData = [
  {
    companyTitle: "Freelance",
    years: "2019 - 2020",
    jobTitle: "Junior web developer",
    jobDescription: ["maintained the whole project all by  myself"],
  },
  {
    companyTitle: "Sportion",
    years: "2020 - 2022",
    jobTitle: "Junior web developer",
    jobDescription: ["maintained the whole project all by  myself"],
  },
  {
    companyTitle: "OKTO",
    years: "2022 - now",
    jobTitle: "Front end developer",
    jobDescription: ["maintained the whole project all by  myself"],
  },
];

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
