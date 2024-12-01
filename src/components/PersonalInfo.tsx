import React from "react";
import AboutMeContainer from "./AboutMeContainer";
import {
  Box,
  Divider,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { aboutMeData } from "../constants";

const PersonalInfo = () => {
  const theme = useTheme();
  const dividerStyle = {
    background: theme.palette.primary.main,
    margin: "20px 0px",
  };
  return (
    <AboutMeContainer title="ABOUT ME">
      <Box>
        <Typography
          variant="h5"
          style={{ color: theme.palette.primary.main }}
          id="whoAmIText"
        >
          {aboutMeData.whoAmI}
        </Typography>
        <Divider sx={dividerStyle} flexItem variant="fullWidth" />
        <List
          sx={{
            display: "flex",
            flexDirection: window.innerWidth > 500 ? "column" : "row",
            flexWrap: "wrap",
            height: "180px",
            color: theme.palette.primary.main,
          }}
        >
          {Object.entries(aboutMeData).map((item) => {
            if (item[0] !== "whoAmI")
              return (
                <ListItem
                  sx={{
                    width: window.innerWidth > 500 ? "50%" : "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  key={item[0]}
                >
                  <Typography
                    variant="h6"
                    style={{ color: theme.palette.primary.main }}
                  >
                    {item[0]}:{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{ color: theme.palette.primary.main }}
                  >
                    {item[1]}
                  </Typography>
                </ListItem>
              );
          })}
        </List>
      </Box>
    </AboutMeContainer>
  );
};

export default PersonalInfo;
