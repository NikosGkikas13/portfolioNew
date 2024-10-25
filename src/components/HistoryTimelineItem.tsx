import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Typography } from "@mui/material";
import React from "react";
import { sep } from "path";

interface HistoryTimelineItemProps {
  companyTitle: string;
  years: string;
  jobTitle: string;
  jobDescription: string[];
  separator?: boolean;
}

const HistoryTimelineItem = ({
  companyTitle,
  years,
  jobTitle,
  jobDescription,
  separator,
}: HistoryTimelineItemProps) => {
  console.log(separator);
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        {companyTitle}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {!separator && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        {" "}
        <Typography variant="h6" component="span">
          {jobTitle}
        </Typography>
        <Typography>{years}</Typography>
        <Typography>{jobDescription}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default HistoryTimelineItem;
