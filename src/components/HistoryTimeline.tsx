import Timeline from "@mui/lab/Timeline";
import AboutMeContainer from "./AboutMeContainer";
import HistoryTimelineItem from "./HistoryTimelineItem";
import { historyData } from "../constants";

const HistoryTimeline = () => {
  return (
    <AboutMeContainer title="EXPERIENCE">
      <Timeline id="timelineContainer">
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
