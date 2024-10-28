import React from "react";
import AboutMeContainer from "./AboutMeContainer";
import { Divider, List, ListItem, Typography } from "@mui/material";
import { aboutMeData } from "../constants";

const dividerStyle = {
  background: "red",
  margin: "20px 0px",
};

const PersonalInfo = () => {
  return (
    <AboutMeContainer title="ABOUT ME">
      <Typography variant="h5">{aboutMeData.whoAmI}</Typography>
      <Divider sx={dividerStyle} flexItem variant="fullWidth" />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          height: "180px",
        }}
      >
        {Object.entries(aboutMeData).map((item) => {
          return (
            <ListItem
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
              key={item[0]}
            >
              <Typography variant="h6">{item[0]}: </Typography>
              <Typography variant="h6">{item[1]}</Typography>
            </ListItem>
          );
        })}
      </List>
    </AboutMeContainer>
  );
};

export default PersonalInfo;
