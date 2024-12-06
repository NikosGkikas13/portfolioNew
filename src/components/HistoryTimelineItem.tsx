import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { List, ListItem, Typography, useTheme } from "@mui/material";

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
        <List id="timelineList">
          {jobDescription.map((description) => (
            <ListItem>
              <Typography
                sx={{
                  fontSize: window.innerWidth > 500 ? "undefined" : "0.8rem",
                  color: theme.palette.primary.main,
                }}
              >
                {description}
              </Typography>
            </ListItem>
          ))}
        </List>
      </TimelineContent>
    </TimelineItem>
  );
};

export default HistoryTimelineItem;
