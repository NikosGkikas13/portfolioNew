import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography, useTheme } from "@mui/material";
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
  const theme = useTheme();
  return (
    <TimelineItem>
      <TimelineOppositeContent
        color="text.secondary"
        sx={{
          fontSize: window.innerWidth > 500 ? "undefined" : "1rem",
          color: theme.palette.primary.main,
        }}
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
          sx={{
            fontSize: window.innerWidth > 500 ? "undefined" : "1rem",
            color: theme.palette.primary.main,
          }}
        >
          {jobTitle}
        </Typography>
        <Typography
          sx={{
            fontSize: window.innerWidth > 500 ? "undefined" : "0.8rem",
            color: theme.palette.primary.main,
          }}
        >
          {years}
        </Typography>
        <Typography
          sx={{
            fontSize: window.innerWidth > 500 ? "undefined" : "0.8rem",
            color: theme.palette.primary.main,
          }}
        >
          {jobDescription}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default HistoryTimelineItem;
