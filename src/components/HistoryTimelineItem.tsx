import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";

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
  return (
    <TimelineItem>
      <TimelineOppositeContent
        color="text.secondary"
        sx={{ fontSize: window.innerWidth > 500 ? "undefined" : "1rem" }}
      >
        {companyTitle}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {!separator && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        {" "}
        <Typography
          variant="h6"
          component="span"
          sx={{ fontSize: window.innerWidth > 500 ? "undefined" : "1rem" }}
        >
          {jobTitle}
        </Typography>
        <Typography
          sx={{ fontSize: window.innerWidth > 500 ? "undefined" : "0.8rem" }}
        >
          {years}
        </Typography>
        <Typography
          sx={{ fontSize: window.innerWidth > 500 ? "undefined" : "0.8rem" }}
        >
          {jobDescription}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default HistoryTimelineItem;
